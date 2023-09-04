import { CardComponent, CardForm, Rect, Vector2D } from "~types";
import { 
  SetFontOptions, 
  SplitTextToWrap,
  CalculateAbsolutePositionX, 
  CalculateAbsolutePositionY, 
  CenterAbout 
} from "./Helpers";

const DrawBaseCard = (form: CardForm, ctx: CanvasRenderingContext2D, scaledCardDimensions: Vector2D) => {
  ctx.save();
  
  const {clientWidth, clientHeight} = ctx.canvas;
  const center: Vector2D = { x: clientWidth/2, y: clientHeight/2 };
  console.log(`Center: (${center.x}, ${center.y})`)

  const cardRect: Rect = CenterAbout(scaledCardDimensions, center);
  console.log(cardRect);

  ctx.fillStyle = form.backgroundColor;
  ctx.moveTo(cardRect.left, cardRect.top);
  ctx.roundRect(
    cardRect.left,
    cardRect.top,
    cardRect.width,
    cardRect.height,
    (scaledCardDimensions.x / form.width) * 10
  );
  ctx.fill();

  // ctx.fillStyle = `#ff0000`;
  // ctx.arc(center.x, center.y, 10, 0, 2*Math.PI);
  // ctx.fill();

  ctx.restore();
}

const DrawTemplatePlaceholders = (form: CardForm, ctx: CanvasRenderingContext2D,  scaledCardDimensions: Vector2D, ) => {
  const { clientWidth, clientHeight } = ctx.canvas;
  const center: Vector2D = { x: clientWidth/2, y: clientHeight/2 };
  const cardRect: Rect = CenterAbout(scaledCardDimensions, center);
  const scalar: number = scaledCardDimensions.x / form.width;
  const paddedCardWidth: number = cardRect.width - (2 * form.padding);

  form.components.forEach((component: CardComponent) => {
    ctx.save();
    const { content, horizontal, vertical } = component;
    SetFontOptions(component, ctx, scalar);

    const xPos = CalculateAbsolutePositionX(horizontal, ctx, cardRect);
    const yPos = CalculateAbsolutePositionY(vertical, ctx, cardRect);
    const fontMetrics = ctx.measureText('Zoo Wee Mama'); // arbitrary text, may as well giggle
    const lineHeight = fontMetrics.fontBoundingBoxAscent + fontMetrics.fontBoundingBoxDescent

    SplitTextToWrap(content, paddedCardWidth, ctx).forEach((line, i) => {
      console.log(`Writing line [${line}] at position [${xPos},${yPos + (i * lineHeight)}]`)
      ctx.fillText(line, xPos, yPos + (i * lineHeight))
    });
     
    ctx.restore();
  })
}

export {
  DrawBaseCard,
  DrawTemplatePlaceholders
}
