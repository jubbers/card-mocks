import { CardForm, Vector2D } from '~types';
import { DrawBaseCard } from './Subfunctions';

const draw = (form: CardForm, ctx: CanvasRenderingContext2D) => {
  const {clientWidth, clientHeight} = ctx.canvas;

  ctx.fillStyle='#FF0000';
  // ctx.fillStyle = '#1E1E1E';
  ctx.fillRect(0, 0, clientWidth, clientHeight);

  const cardAspectRatio = form.width / form.height;
  console.log(`Calculated aspect ratio: ${form.width}:${form.height} or ${cardAspectRatio}`)

  const maxCardDimensions: Vector2D = {
    x: clientWidth - (form.padding * 2),
    y: clientHeight - (form.padding * 2),
  }

  console.log(`Max Card Dimensions: ${maxCardDimensions.x}x${maxCardDimensions.y}`);

  // Default to scaling to max vertical
  let scaledCardDimensions: Vector2D = {
    x: Math.round(maxCardDimensions.y * cardAspectRatio),
    y: maxCardDimensions.y,
  }

  // if x clipping exists, try for X
  if (scaledCardDimensions.x > maxCardDimensions.x) {
    console.log(`Max dimensions:    ${maxCardDimensions.x}x${maxCardDimensions.y}`)
    console.log('Need to swap to x-clipping');
    scaledCardDimensions = {
      x: maxCardDimensions.x,
      y: Math.round(maxCardDimensions.x / cardAspectRatio),
    }
  }

  console.log(`Canvas Dimensions: ${clientWidth}x${clientHeight}`)
  console.log(`Scaled Card Dimensions: ${scaledCardDimensions.x}x${scaledCardDimensions.y}`)

  DrawBaseCard(form, ctx, scaledCardDimensions)
  console.log('Base card drawn...');
}

export default draw;