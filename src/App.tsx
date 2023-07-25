import * as React from "react";
import styled from 'styled-components';
import Header from '~components/Header';
import Canvas from '~components/Canvas';
import Divider from '~components/Divider';
import ControlPanel from "~components/ControlPanel";
import { CardForm } from '~types';
import { Setup } from '~components/Controls';
import draw from '~draw';
import 'reset.css'

const Root = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  background-color: #1E1E1E;
  color: #FFFFFF;
`

const Body = styled.main`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export default () => {
  const [form, setForm] = React.useState<CardForm>({
    height: 700,
    width: 400,
    backgroundColor: '#FFFFFF',
    setName: '',
    components: [],
  });
  
  return (
  <Root>
    <Header />
    <Body>
      <ControlPanel controls={[
        <Setup form={form} setForm={setForm} key='setup'/> 
        ]} />
      <Divider />
      <Canvas 
        form={form}
        draw={draw} 
        padding={24} />
    </Body>
  </Root>
)};
