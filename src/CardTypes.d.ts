export type HexColor = `#${string}`;

export interface Card {
  height: number;
  width: number;
  backgroundColor: HexColor;
}