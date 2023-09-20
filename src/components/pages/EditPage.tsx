import * as React from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import draw from '~draw';
import { 
  ControlAddButton,
  ControlTemplate, 
  ControlSetup,
  ControlPanel,
} from "~components/molecules";
import { Canvas, Divider, Header } from '~components/organisms';
import { Root, Body } from './SharedLayouts';
import { CardComponent, FormProps } from '~types';
import { useNavigate } from 'react-router-dom';

interface EditPageProps extends FormProps {};

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 12px;
`

const EditPage = ({cardForm, setForm}: EditPageProps) => {
  const navigate = useNavigate();

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
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }

  const loadAction = () => navigate('/load');

  return (
    <Root>
      <Header saveAction={saveAction} loadAction={loadAction} />
      
      <Body>
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