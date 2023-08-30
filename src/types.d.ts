export type HexColor = `#${string}`;

export interface CardForm {
  height: number;
  width: number;
  setName: string;
  padding: IntPercent;
  backgroundColor: HexColor;

  components: CardComponent[];
  scaledCard: Vector2D;
}

export interface CardComponent {
  id: string;
  content: string;
  horizontal: Alignment;
  vertical: Alignment
}

export type AlignmentType = 'start' | 'center' | 'end';

export type Alignment = {
  type: AlignmentType;
  percentage?: IntPercent; // optional override to alignment type
};


export interface FormProps {
  cardForm: CardForm;
  setForm: (form: CardForm) => void;
}

export type IntPercent = IntRange<0, 101>; // range 0-100

export type Vector2D = {
  x: number;
  y: number;
}

// Rect type for canvas drawing requirements
export type Rect = {
  left: number;
  top: number;
  width: number;
  height: number;
}

// Helper types for integer ranges, per https://stackoverflow.com/q/39494689
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number] 
  : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

/* Asset Type Imports */
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';