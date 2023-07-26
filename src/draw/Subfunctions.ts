import { CardForm, Rect, Vector2D } from "~types";
import { CenterAbout } from "./Helpers";

const DrawBaseCard = (form: CardForm, ctx: CanvasRenderingContext2D, scaledCard: Vector2D) => {
  ctx.save();
  
  const {clientWidth, clientHeight} = ctx.canvas;
  const center: Vector2D = { x: clientWidth/2, y: clientHeight/2 };
  console.log(`Center: (${center.x}, ${center.y})`)

  const cardRect: Rect = CenterAbout(scaledCard, center);
  console.log(cardRect);

  ctx.moveTo(cardRect.x, cardRect.y);
  ctx.fillStyle = `#ffffff`;
  ctx.fillRect(
    cardRect.x,
    cardRect.y,
    cardRect.height,
    cardRect.width,
    // 10, // temporary floating number for 
  )

  ctx.restore();
}

export {
  DrawBaseCard
}