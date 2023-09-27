import { CardForm, Vector2D } from '~types';
import { DrawBaseCard, DrawTemplatePlaceholders } from './draw-subfunctions';

export const draw = (form: CardForm, ctx: CanvasRenderingContext2D) => {
  const {clientWidth, clientHeight} = ctx.canvas;

  ctx.fillStyle = '#1E1E1E';
  ctx.fillRect(0, 0, clientWidth, clientHeight);

  const cardAspectRatio = form.width / form.height;
  const maxCardDimensions: Vector2D = {
    x: clientWidth - (form.padding * 2),
    y: clientHeight - (form.padding * 2),
  }

  // Default to scaling to max vertical
  let scaledCardDimensions: Vector2D = {
    x: Math.round(maxCardDimensions.y * cardAspectRatio),
    y: maxCardDimensions.y,
  }

  // if x clipping exists, try for X
  if (scaledCardDimensions.x > maxCardDimensions.x) {
    scaledCardDimensions = {
      x: maxCardDimensions.x,
      y: Math.round(maxCardDimensions.x / cardAspectRatio),
    }
  }

  DrawBaseCard(form, ctx, scaledCardDimensions);
  DrawTemplatePlaceholders(form, ctx, scaledCardDimensions);
}

export const drawForExport = (form: CardForm, ctx: CanvasRenderingContext2D) => {
  const cardSize = { x: form.width, y: form.height };
  DrawBaseCard(form, ctx, cardSize); 
  DrawTemplatePlaceholders(form, ctx, cardSize)
}

export default draw;