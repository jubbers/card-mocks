import { Rect, Vector2D } from "~types";

const CenterAbout = (dimensions: Vector2D, center: Vector2D): Rect => {
  return {
    left: center.x - (dimensions.x / 2),
    top: center.y - (dimensions.y / 2),
    width: dimensions.x,
    height: dimensions.y,
  }
}

export {
  CenterAbout,
}