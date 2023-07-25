import { CardForm, Rect } from '~types';

const draw = (form: CardForm, ctx: CanvasRenderingContext2D) => {
  const {clientWidth, clientHeight} = ctx.canvas;

  ctx.fillStyle = '#1E1E1E';
  ctx.fillRect(0, 0, clientWidth, clientHeight);

  const cardAspectRatio = form.height / form.width;
  const maxCardDimensions: Rect = {
    height: clientHeight - (clientHeight * form.padding) * 2,
    width: clientWidth - (clientWidth * form.padding) * 2,
  }
}

export default draw;