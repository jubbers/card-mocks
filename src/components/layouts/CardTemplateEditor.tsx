import * as React from 'react';
import styled from 'styled-components';
import draw from '~draw';
import AddComponentButton from "~components/controls/molecules/ControlAddButton";
import Canvas from '~components/canvas';
import { 
  ControlTemplate, 
  ControlSetup,
  ControlPanel,
} from "~components/controls/molecules";
import Divider from '~components/Divider';
import Header from '~components/Header';
import { CardComponent, FormProps } from '~types';

interface CardTemplateEditorProps extends FormProps {};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

const Body = styled.main`
  display: flex;
  flex-direction: row;
  flex: 1;
  overflow: hidden; /* stop canvas from expanding */
`

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 12px;
`

const CardTemplateEditor = ({cardForm, setForm}: CardTemplateEditorProps) => {
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
        <AddComponentButton cardForm={cardForm} setForm={setForm} key='new-template-component-button'/>
      ]} />
      <Divider />
      <Canvas 
        cardForm={cardForm}
        draw={draw} />
    </Body>
  </Root>
  )

}

export default CardTemplateEditor;