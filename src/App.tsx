import * as React from "react";
import styled from 'styled-components';
import Header from '~components/Header'
import Canvas from '~components/Canvas';
import ControlPanel from "~components/ControlPanel";
import 'reset.css'

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1E1E1E;

  display: flex;
  flex-direction: row;
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
    <ControlPanel />
    <Canvas 
      draw={draw}
      height={100}
      width={100} />
  </Root>
);
