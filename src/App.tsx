import * as React from "react";
import styled from 'styled-components';
import Header from '~components/Header';
import Canvas from '~components/Canvas';
import Divider from '~components/Divider';
import ControlPanel from "~components/ControlPanel";
import 'reset.css'

const Root = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  background-color: #1E1E1E;
  color: #FFF;
`

const Body = styled.body`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const draw = (ctx: CanvasRenderingContext2D) => {
  console.log(ctx.canvas.clientHeight);
  console.log(ctx.canvas.clientWidth);

  const quarterHeight = ctx.canvas.clientHeight / 4;
  const quarterWidth = ctx.canvas.clientWidth / 4;
  ctx.fillStyle = '#000';
  ctx.fillRect(
    quarterWidth, 
    quarterHeight, 
    ctx.canvas.clientWidth - quarterWidth, 
    ctx.canvas.clientHeight - quarterHeight);
}

export default () => (
  <Root>
    <Header />
    <Body>
      <ControlPanel />
      <Divider />
      <Canvas 
        draw={draw}
        height={100}
        width={100} />
    </Body>
  </Root>

);
