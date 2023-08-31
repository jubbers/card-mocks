import { Alignment, AlignmentType, Rect, Vector2D } from "~types";

/** X/Y Positioning Helpers */
const CenterAbout = (dimensions: Vector2D, center: Vector2D): Rect => {
  return {
    left: center.x - (dimensions.x / 2),
    top: center.y - (dimensions.y / 2),
    width: dimensions.x,
    height: dimensions.y,
  }
}

const CalculateAbsolutePosition = (
  alignment: Alignment, 
  ctx: CanvasRenderingContext2D,
  cardRect: Rect, 
  isHorizontal: boolean): number => {
    let position: number;
    const shiftPercentage: number = (alignment.percentage || 0) / 100;
    const scaledCardDimension = isHorizontal ? cardRect.width : cardRect.height;
    const discreteShift: number = shiftPercentage * scaledCardDimension;
    const basePosition = isHorizontal ? cardRect.left : cardRect.top;
   
    switch(alignment.type) {
      case 'start':
        position = basePosition + discreteShift;
        break;
      
      case 'center':
        position = basePosition + (scaledCardDimension / 2);
        break;

      case 'end':
        ctx.textAlign = 'right'; // TODO: find a way to enact this side effect elsewhere
        position = (basePosition + scaledCardDimension) - discreteShift;
        break;

      default:
        throw new Error('???');
    }
    return position;
}

const CalculateAbsolutePositionX = (alignment: Alignment, ctx: CanvasRenderingContext2D, cardRect: Rect) => {
  return CalculateAbsolutePosition(alignment, ctx, cardRect, true);
}

const CalculateAbsolutePositionY = (alignment: Alignment, ctx: CanvasRenderingContext2D, cardRect: Rect) => {
  return CalculateAbsolutePosition(alignment, ctx, cardRect, false);
}

/** Text Options Side Effects */
const SetFontOptions = (alignment: Alignment, ctx: CanvasRenderingContext2D, uniformScalar: number): void => {
  switch(alignment.type) {
    case 'start':
      ctx.textAlign = 'left'; 
      break;
    case 'center':
      ctx.textAlign = 'center'; 
      break;
    case 'end':
      ctx.textAlign = 'right'
      break;
  }

  const font: string[] = ctx.font.split(' ');
  font.shift();
  ctx.font = `${24 * uniformScalar}px ` + font.join(' ');
}

export {
  CenterAbout,
  CalculateAbsolutePositionX,
  CalculateAbsolutePositionY,
  SetFontOptions,
}