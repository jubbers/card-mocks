import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardForm, Vector2D } from '~types';
import { CalculateCardScalar } from './helpers';

interface CanvasProps {
  form: CardForm;
  draw: (form: CardForm, context: CanvasRenderingContext2D) => void;
  padding: number;
}

const CanvasContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const CanvasWidthError = styled.p`
  color: red;
  font-size: 10px;
`

const Canvas = ({form, draw, padding}: CanvasProps): JSX.Element => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ displayWidthError, setDisplayWidthError ] = useState(false);

  const render = () => {
    const parentRect = canvas.current!.parentElement?.getBoundingClientRect() as DOMRect;
    canvas.current!.height = parentRect.height;
    canvas.current!.width = parentRect.width;
    setDisplayWidthError(canvas.current!.width < 400)

    if (!canvas.current) throw new Error("Invalid canvas context");
    draw(form, canvas.current.getContext('2d') as CanvasRenderingContext2D);
  }

  useEffect(() => {
    render();
    window.addEventListener('resize', render);
    return () => window.removeEventListener('resize', render)
  });

  return(
    <CanvasContainer>
      <canvas ref={canvas} />
    </CanvasContainer>
  )
}

export default Canvas;