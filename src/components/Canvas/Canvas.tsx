import * as React from 'react';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { CardForm } from '~types';

interface CanvasProps {
  form: CardForm;
  draw: (context: CanvasRenderingContext2D) => void;
}

const CanvasContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Canvas = ({form, draw}: CanvasProps): JSX.Element => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const render = () => {
    if (!canvas.current) throw new Error("Invalid canvas context");
    draw(canvas.current.getContext('2d') as CanvasRenderingContext2D);
  }

  useEffect(() => {
    render();
    window.addEventListener('resize', render);
    return () => window.removeEventListener('resize', render)
  })

  return(
    <CanvasContainer>
      <canvas 
        ref={canvas} 
        height={form.height} 
        width={form.width}
        style={{
          borderRadius: '8px 8px 8px 8px' ,
        }} />
    </CanvasContainer>
  )
}

export default Canvas;