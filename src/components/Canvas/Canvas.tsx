import * as React from 'react';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { CardForm, Vector2D } from '~types';

interface CanvasProps {
  form: CardForm;
  draw: (context: CanvasRenderingContext2D) => void;
  padding: number;
}

const CanvasContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 23px;
`

const Canvas = ({form, draw, padding}: CanvasProps): JSX.Element => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const render = () => {
    if (!canvas.current) throw new Error("Invalid canvas context");
    if (!container.current) throw new Error("Invalid canvas container context");
    
    // TODO: Add support for if card is too wide
    // If card is too tall, scale to fit
    const maxCardHeight = container.current!.clientHeight - (padding * 2);
    console.log(maxCardHeight);
    if (form.height > maxCardHeight) {
      console.log(`Height: ${form.height}`);
      console.log(`Max H:  ${maxCardHeight}`);
      const aspectRatioShift = maxCardHeight / form.height;

      canvas.current!.height = maxCardHeight;
      canvas.current!.width = maxCardHeight * aspectRatioShift;
    }

    // Draw to scaled canvas
    draw(canvas.current.getContext('2d') as CanvasRenderingContext2D);
  }

  useEffect(() => {
    render();
    window.addEventListener('resize', render);
    return () => window.removeEventListener('resize', render)
  });

  return(
    <CanvasContainer ref={container}>
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