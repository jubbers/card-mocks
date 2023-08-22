import * as React from "react";
import styled from 'styled-components';
import draw from '~draw';
import useForm from "~UseForm";
import AddComponentButton from "~components/AddComponentButton";
import Canvas from '~components/Canvas';
import ComponentControl from "~components/Controls/ComponentControl";
import ControlPanel from "~components/ControlPanel";
import Divider from '~components/Divider';
import Header from '~components/Header';
import { CardComponent, CardForm } from '~types';
import { Setup } from '~components/Controls';
import 'reset.css';

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
`;

export default () => {
  const [form, setForm] = useForm();

  const RenderCardComponents = (components: CardComponent[]) => {
    return components.map((component, index) => (
      <ComponentControl 
        key={`component_${index}`}
        cardForm={form}
        setForm={setForm}
        index={index}
        component={component} />
    ))
  }

  return (
  <Root>
    <Header />
    <Body>
      <ControlPanel controls={[
        <Setup cardForm={form} setForm={setForm} key='setup-panel'/>,
        <div key='form-controls'>{...RenderCardComponents(form.components)}</div>,
        <AddComponentButton cardForm={form} setForm={setForm} key='new-template-component-button'/>
      ]} />
      <Divider />
      <Canvas 
        cardForm={form}
        draw={draw} />
    </Body>
  </Root>
)};
