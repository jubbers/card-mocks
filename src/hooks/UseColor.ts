import { useState } from 'react';
import { formatStringAsHex } from '~components/Controls/helpers';
import { HexColor } from '~types';

type SetColor = (color: HexColor) => void;
type SetPartial = (partial: string) => void;
type UseColorReturn = [HexColor, SetColor, SetPartial, SetPartial, SetPartial];

// Helper to make getting/setting colors individually easier
const useColor = (defaultColor: HexColor, updateColor: (color: HexColor) => void): UseColorReturn => {
  const [ color, setColor ] = useState<HexColor>(defaultColor);
  const getRed = () => color.slice(1, 3);
  const getGreen = () => color.slice(3, 5);
  const getBlue = () => color.slice(5, 7);

  const setFullColor = (newColor: HexColor): void => {
    console.log(`Prev hex color: ${color}`)
    console.log(`Prev color ind: ${getRed()} ${getGreen()} ${getBlue()}`)
    console.log(`New hex color:  ${newColor}`);
    updateColor(newColor);
    setColor(newColor);
  }


  const setRed = (red: string) => {
    if (red.length !== 2) return;
    setFullColor(formatStringAsHex(red.toLowerCase() + getGreen() + getBlue()));
  }

  const setGreen = (green: string) => {
    if (green.length !== 2) return;
    setFullColor(formatStringAsHex(getRed() + green.toLowerCase() + getBlue()));
  }

  const setBlue = (blue: string) => {
    if (blue.length !== 2) return;
    setFullColor(formatStringAsHex(getRed() + getGreen() + blue.toLowerCase()));
  }

  return [ color, setFullColor, setRed, setGreen, setBlue ];
}


export default useColor;