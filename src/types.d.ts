export type HexColor = `#${string}`;

export interface CardForm {
  height: number;
  width: number;
  backgroundColor: HexColor;
  setName: string;
}

export interface FormProps {
  form: CardForm;
  setForm: (form: CardForm) => void;
}

export type Vector2D = {
  x: number;
  y: number;
}