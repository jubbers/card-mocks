import { HexColor } from "~types";

const formatStringAsHex = (s: string): HexColor => {
  if (s.slice(0, 1) === '#' && s.length === 7) return s as HexColor;
  return '#' + s.replace(/#/g, '').toLowerCase().slice(0, 6) as HexColor;
}

const formatHexAsDecimal = (hex: string): number => {
  return parseInt(hex, 16);
}

const formatDecimalAsHex = (decimal: number): string => {
  if (!decimal) return '00';
  return decimal.toString(16).padStart(2, '0');
}

export {
  formatStringAsHex,
  formatHexAsDecimal,
  formatDecimalAsHex,
}