export type HexColor = `#${string}`;

export interface CardForm {
  height: number;
  width: number;
  backgroundColor: HexColor;
  setName: string;
  padding: IntPercent;
  components: CardComponent[];
}

export interface CardComponent {
  id: string;
  content: string;
  horizontal: Alignment;
  vertical: Alignment
}

export type Alignment = {
  type: 'start' | 'center' | 'end';
  percentage?: IntPercent; // optional override tox  alignment type
};


export interface FormProps {
  form: CardForm;
  setForm: (form: CardForm) => void;
}

export type IntPercent = IntRange<0, 100>;

export type Rect = {
  height: number;
  width: number;
}

// Helper types for integer ranges, per https://stackoverflow.com/q/39494689
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>