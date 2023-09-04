import { Alignment, AlignmentType, CardComponent, Rect, Vector2D } from "~types";

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
const SetFontOptions = (component: CardComponent, ctx: CanvasRenderingContext2D, uniformScalar: number): void => {
  // horizontal alignment
  switch(component.horizontal.type) {
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

  // vertical alignment
  switch(component.vertical.type) {
    case 'start':
      ctx.textBaseline = 'top'; 
      break;
    case 'center':
      ctx.textBaseline = 'middle';
      break;
    case 'end':
      ctx.textBaseline = 'bottom';
      break;
  }

  // font size
  const font: string[] = ctx.font.split(' ');
  font.shift();
  ctx.font = `${24 * uniformScalar}px ` + font.join(' ');

  // font color
  ctx.fillStyle = component.textColor;
}

/** Text writing */
const SplitTextToWrap = (text: string, paddedCardWidth: number, ctx: CanvasRenderingContext2D): string[]=> {
  const words = text.split(' ');
  let currentRow: string[] = [];
  let completedRows: string[] = []

  words.forEach(word => {
    currentRow.push(word);
    console.log(`Adding word to current:\n${currentRow}`)

    if (ctx.measureText(currentRow.join(' ')).width > paddedCardWidth) {
      console.log(`Overflow detected, rolling back and resetting current...`);
      console.log(currentRow)
      currentRow.pop();
      completedRows.push(...currentRow.join(' ').split('\n'));
      currentRow = [word];
    }
  })

  completedRows.push(...currentRow.join(' ').split('\n'))
  return completedRows;
}

export {
  CenterAbout,
  CalculateAbsolutePositionX,
  CalculateAbsolutePositionY,
  SetFontOptions,
  SplitTextToWrap,
}