import * as React from 'react';
import styled from 'styled-components';
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

interface EditPageProps extends FormProps {};

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 12px;
`

const EditPage = ({cardForm, setForm}: EditPageProps) => {
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

  return (
    <Root>
      <Header />
      <Body>
        <ControlPanel controls={[
          <ControlSetup cardForm={cardForm} setForm={setForm} key='setup-panel'/>,
          <ComponentWrapper key='form-controls'>{...RenderCardComponents(cardForm.components)}</ComponentWrapper>,
          <ControlAddButton cardForm={cardForm} setForm={setForm} key='new-template-component-button'/>
        ]} />
        <Divider />
        <Canvas cardForm={cardForm} />
      </Body>
    </Root>
  )

}

export default EditPage;