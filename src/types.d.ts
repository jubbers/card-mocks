export type HexColor = `#${string}`;

export interface CardForm {
  height: number;
  width: number;
  backgroundColor: HexColor;
  setName: string;
}

interface FormProps {
  form: CardForm;
  setForm: (form: CardForm) => void;
}