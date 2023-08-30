import { CardComponent, CardForm, Rect, Vector2D } from "~types";
import { CenterAbout } from "./Helpers";

const DrawBaseCard = (form: CardForm, ctx: CanvasRenderingContext2D, scaledCardDimensions: Vector2D) => {
  ctx.save();
  
  const {clientWidth, clientHeight} = ctx.canvas;
  const center: Vector2D = { x: clientWidth/2, y: clientHeight/2 };
  console.log(`Center: (${center.x}, ${center.y})`)

  const cardRect: Rect = CenterAbout(scaledCardDimensions, center);
  console.log(cardRect);

  ctx.fillStyle = form.backgroundColor;
  ctx.moveTo(cardRect.left, cardRect.top);
  ctx.fillRect(
    cardRect.left,
    cardRect.top,
    cardRect.width,
    cardRect.height,
  );

  ctx.fillStyle = `#ff0000`;
  ctx.arc(center.x, center.y, 10, 0, 2*Math.PI);
  ctx.fill();

  ctx.restore();
}

const DrawTemplatePlaceholders = (form: CardForm, ctx: CanvasRenderingContext2D, scaledCardDimensions: Vector2D) => {
  const { clientWidth, clientHeight } = ctx.canvas;
  const center: Vector2D = { x: clientWidth/2, y: clientHeight/2 };
  const cardRect: Rect = CenterAbout(scaledCardDimensions, center);

  form.components.forEach((component: CardComponent) => {
    ctx.save();
    const { content, horizontal, vertical } = component;
    
    ctx.font = '24px mono'
    
    // Horz alignment
    const xPos = center.x;
    ctx.textAlign = 'center'; /* Update + Expand */

    // Vert alignment
    const yPos = center.y;
    ctx.textBaseline = 'middle';
    
    // Actual draw
    ctx.fillText(content, xPos, yPos);

    ctx.restore();
  })
}

export {
  DrawBaseCard,
  DrawTemplatePlaceholders
}