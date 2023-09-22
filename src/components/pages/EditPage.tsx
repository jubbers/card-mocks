import * as React from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import { 
  ControlAddButton,
  ControlTemplate, 
  ControlSetup,
  ControlPanel,
  ControlDialogue,
} from "~components/molecules";
import { Canvas, Divider, Header, Sidebar } from '~components/organisms';
import { Root, Body } from './SharedLayouts';
import { CardComponent, FormProps } from '~types';
import { useNavigate } from 'react-router-dom';
import { drawForExport } from '~components/organisms/canvas/Draw';

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

  const exportAction = () => {
    const exportCanvas = document.createElement('canvas');
    exportCanvas.width = cardForm.width;
    exportCanvas.height = cardForm.height;
    const ctx = exportCanvas.getContext('2d') as CanvasRenderingContext2D; 
    ctx.canvas.width = cardForm.width;
    ctx.canvas.height = cardForm.height; 
    drawForExport(cardForm, ctx);
    
    const dataUrl = exportCanvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `${cardForm.templateName}.png`;
    link.href = dataUrl;
    link.click();

    // cleanup
    link.remove();
    exportCanvas.remove();
  }

  const exportAllAction = () => {
    setShowDialogue(true);
  }

  return (
    <Root>
      <Header />
      
      <Body>
        <Sidebar 
          saveAction={saveAction}
          loadAction={loadAction}
          exportSampleAction={exportAction}
          exportAllAction={exportAllAction} />
        <ControlPanel controls={[
          <ControlSetup cardForm={cardForm} setForm={setForm} key='setup-panel'/>,
          <ComponentWrapper key='form-controls'>{...RenderCardComponents(cardForm.components)}</ComponentWrapper>,
          <ControlAddButton cardForm={cardForm} setForm={setForm} key='new-template-component-button'/>
        ]} />
        <Divider />
        <Canvas cardForm={cardForm} />
      </Body>

      <ToastContainer />
    </Root>
  )

}

export default EditPage;