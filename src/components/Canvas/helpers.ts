export const CalculateCardScalar = (cardX: number, cardY: number, windowX: number, windowY: number) => {
  // If the card fits inside the window at its current size, dont scale
  if (cardX > windowX && cardY > windowY) return 1;

  const xScalar = cardX/windowX;
  const yScalar = cardY/windowY;

  // Scale canvas to maximize vertical
  return xScalar > yScalar ? xScalar : yScalar;
}
