import * as React from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import { ControlPanel} from '~components/atoms'
import { 
  ControlAddButton,
  ControlTemplate, 
  ControlSetup,
  DialogueUpload,
} from "~components/molecules";
import { Canvas, Divider, Header, Sidebar } from '~components/organisms';
import { Root, Body } from './SharedLayouts';
import { CardComponent, CardForm, FormProps } from '~types';
import { useNavigate } from 'react-router-dom';
import { parseArrayFromCsv, generateDownloadLink, blobify } from '~components/export-helpers';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';

interface EditPageProps extends FormProps {};

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 12px;
`

const EditPage = ({cardForm, setForm}: EditPageProps) => {
  const navigate = useNavigate();
  const [showDialogue, setShowDialogue] = React.useState<boolean>(false);

  const RenderCardComponents = (components: CardComponent[]) => {
    return components.map((component, index) => (
      <ControlTemplate 
        key={`component_${index}`}
        cardForm={cardForm}
        setForm={setForm}
        index={index}
        component={component} 
        removable />
    ))
  }

  const saveAction = () => {
    const cardJson = JSON.stringify(cardForm);
    localStorage.setItem(cardForm.templateName, cardJson);
    toast('template saved!', {
      position: "top-right",
      autoClose: 2500,
      closeOnClick: true,
      draggable: true,
      theme: "dark",
    })
  }

  const loadAction = () => navigate('/load');
  const exportSampleAction = () => generateDownloadLink(cardForm).download();
  const exportAllAction = () => setShowDialogue(true);
  const closeDialogueAction = () => setShowDialogue(false);

  const onFileUpload = async (f: File) => {
    const fileText = await f.text()
    const parsedData = parseArrayFromCsv(fileText);

    if (parsedData.length === 0) {
      console.log(parsedData);
      throw new Error('Invalid file parse');
    }

    // validate CSV headers match cardForm component names
    const csvHeaders: string[] = parsedData[0];
    const compNames: string[] = cardForm.components.map((comp: CardComponent) => comp.id);
    const headersMatch = csvHeaders.every((header: string) => compNames.includes(header));
    if (!headersMatch) throw new Error("CSV headers don't match cardForm component names");

    const orderedComponentIds = cardForm.components.map((component) => component.id);
    const indicesByPosition = csvHeaders.map((header: string) => orderedComponentIds.indexOf(header));

    // create new cardForm for each row of data
    const generatedCardForms: CardForm[] = [];
    for (let i=1; i<parsedData.length; i++) {
      const cardCopy: CardForm = JSON.parse(JSON.stringify(cardForm)); // deep copy required
      for (let j=0; j<parsedData[i].length; j++) {
        cardCopy.components[indicesByPosition[j]].content = parsedData[i][j];
      }
      generatedCardForms.push(cardCopy);
    }

    // Generate the zip file
    const zip = new JSZip();

    await Promise.all(
      generatedCardForms.map(async (form: CardForm, index: number) => {
        const { canvas, cleanup } = generateDownloadLink(form);
        const blob: Blob = await blobify(canvas);
        const imgUrl = URL.createObjectURL(blob);
        zip.file(`${form.templateName}--${index}.png`, blob)
        cleanup();
        return Promise.resolve();
      })
    )

    console.log('Zip:')
    console.log(zip);

    // Save the zip file
    console.log('Zipping...');
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, `${cardForm.templateName}_all.zip`);

    const parsed = await JSZip.loadAsync(content);
    console.log('Parsed files:')
    console.log(parsed.files);

    // zip.generateAsync({ type: "blob" }).then(async (zipBlob: Blob) => {
      // zipblob not saving information for some reason
      // saveAs(zipBlob, `${cardForm.templateName}_all.zip`);


  }

  return (
    <Root>
      <Header />
      
      <Body>
        <Sidebar 
          saveAction={saveAction}
          loadAction={loadAction}
          exportSampleAction={exportSampleAction}
          exportAllAction={exportAllAction} />
        <ControlPanel controls={[
          <ControlSetup cardForm={cardForm} setForm={setForm} key='setup-panel'/>,
          <ComponentWrapper key='form-controls'>{...RenderCardComponents(cardForm.components)}</ComponentWrapper>,
          <ControlAddButton cardForm={cardForm} setForm={setForm} key='new-template-component-button'/>
        ]} />
        <Divider />
        <Canvas cardForm={cardForm} />
      </Body>

      <DialogueUpload 
        label={'upload data file (.csv)'}
        visible={showDialogue}
        buttonContent={'continue'}
        removeAction={closeDialogueAction}  
        continueAction={() => {}}   
        onFileUpload={onFileUpload} />
      <ToastContainer />
    </Root>
  )
}

export default EditPage;