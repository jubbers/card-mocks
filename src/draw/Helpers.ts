import { Rect, Vector2D } from "~types";

const CenterAbout = (dimensions: Vector2D, center: Vector2D): Rect => {
  const right = center.x - (dimensions.x / 2);
  const top = center.y - (dimensions.y / 2);

  return {
    x: right,
    y: top,
    width: dimensions.x,
    height: dimensions.y,
  }
}

export {
  CenterAbout,
}