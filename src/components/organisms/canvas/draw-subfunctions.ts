import { CardComponent, CardForm, Rect, Vector2D } from "~types";
import { 
  SetFontOptions, 
  SplitTextToWrap,
  CalculateAbsolutePositionX, 
  CalculateAbsolutePositionY, 
  CenterAbout 
} from "./draw-helpers";

export const DrawBaseCard = (form: CardForm, ctx: CanvasRenderingContext2D, scaledCardDimensions: Vector2D) => {
  ctx.save();
  const clientWidth = ctx.canvas.clientWidth  || form.width;
  const clientHeight = ctx.canvas.clientHeight || form.height;

  const center: Vector2D = { x: clientWidth/2, y: clientHeight/2 };
  const cardRect: Rect = CenterAbout(scaledCardDimensions, center);

  console.log('Center:')
  console.log(center);

  console.log('Card Rect:')
  console.log(cardRect);

  ctx.fillStyle = form.backgroundColor;
  ctx.moveTo(cardRect.left, cardRect.top);
  ctx.roundRect(
    cardRect.left,
    cardRect.top,
    cardRect.width,
    cardRect.height,
    Math.abs((scaledCardDimensions.x / form.width) * 10)
  );
  ctx.fill();
  ctx.restore();
}

export const DrawTemplatePlaceholders = (form: CardForm, ctx: CanvasRenderingContext2D,  scaledCardDimensions: Vector2D, ) => {
  const clientWidth = ctx.canvas.clientWidth  || form.width;
  const clientHeight = ctx.canvas.clientHeight || form.height;
  
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

    const splitText = SplitTextToWrap(content, paddedCardWidth, ctx)
    const baselineOffset = (lineHeight) * (splitText.length - 1);
    splitText.forEach((line, i) => {
      switch(component.vertical.type) {
        case 'start':
          ctx.fillText(line, xPos, yPos + (i * lineHeight));
          return;
        case 'center':
          // TODO: center vertically
          ctx.fillText(line, xPos, yPos + (i * lineHeight));
          return;
        case 'end':
          ctx.fillText(line, xPos, yPos - baselineOffset +  (i * lineHeight));
      }
    });
    ctx.restore();
  })
}
