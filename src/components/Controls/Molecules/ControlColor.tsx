import * as React from 'react';
import styled from 'styled-components';
import { HexColor } from '~types';
import useColor from '~hooks/UseColor';
import { ControlInput } from '../Atoms/ControlStyles';
import { formatDecimalAsHex, formatHexAsDecimal, formatStringAsHex } from '../helpers';

interface ControlColorProps {
  id: string;
  label: string;
  defaultColor: HexColor;
  update: (color: HexColor) => void;
} 

const ControlColorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;

`

const ControlLabelStack = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child input {
    padding: 0;
    margin: 0;
    border-radius: 4px 0 0 4px;
  }
`

const ColorStack = styled(ControlLabelStack)`
  flex: 2;
  min-width: 150px;

  ::-moz-color-swatch, ::-webkit-color-swatch {
    border: none;
  }

  input {
    border-radius: 4px 0 0 4px;
    border-right: none;
    height: 29px;
  }
`

const AuxColorControls = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.5;
`

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid #3E3E42;
  border-radius: 0 4px 4px 0;
  border-left: none;
  background-color: #1E1E1E;
  gap: 1px; 
  justify-content: center;
  align-items: center;

  hr {
    height: 12px;
    border: 2px solid #3E3E42;
    border-left: none;
  }

  input {
    border: none;
    border-radius: none;
    text-align: center;
    margin: 0;
    flex: 1;
    min-width: 35px;
  }

  input:first-child {
    flex: 2.5;
  }
`

const LabelRow = styled(InputRow) `
  border: none;
  justify-content: space-between;
  color: #A8A8A8;
  background-color: #252526;

  label {
    flex: 1;
    min-width: 35px;
    text-align: center;
    padding: 0 4px;
  }

  label:first-child {
    flex: 2.5;
  }
`;

const ControlColor = ({ defaultColor, id, label, update }: ControlColorProps) => {
  const [color, setColor, setRed, setGreen, setBlue] = useColor(defaultColor, update);

  const updateColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(formatStringAsHex(e.target.value.toLowerCase()));
  }

  const updateRed = (e: React.ChangeEvent<HTMLInputElement>) => {
    const redAsHex = formatDecimalAsHex(parseInt(e.target.value, 10));
    setRed(redAsHex);
  }

  const updateGreen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const greenAsHex = formatDecimalAsHex(parseInt(e.target.value, 10));
    setGreen(greenAsHex);
  }

  const updateBlue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const blueAsHex = formatDecimalAsHex(parseInt(e.target.value, 10));
    setBlue(blueAsHex);
  }


  return (
    <>
      <ControlColorWrapper>
        <ColorStack>
          <label htmlFor={`${id}_color`}>{label}</label>
          <ControlInput type='color' id={`${id}_color`} value={color} onChange={updateColor} />
        </ColorStack>
        <AuxColorControls>
          <LabelRow>
            <label htmlFor={`${id}_hex`}>hex</label>
            <label htmlFor={`${id}_red`}>r</label>
            <label htmlFor={`${id}_green`}>g</label>
            <label htmlFor={`${id}_blue`}>b</label>
          </LabelRow>
          <InputRow>
            <ControlInput 
              id={`${id}_hex`}
              type='text' 
              value={color} 
              onChange={updateColor} />
            <hr />
            <ControlInput 
              id={`${id}_red`}
              type='text' 
              value={formatHexAsDecimal(color.slice(1, 3).toUpperCase())} 
              onChange={updateRed} />
            <hr />
            <ControlInput 
              id={`${id}_green`}
              type='text' 
              value={formatHexAsDecimal(color.slice(3, 5).toUpperCase())} 
              onChange={updateGreen}/>
            <hr />
            <ControlInput 
              id={`${id}_blue`}
              type='text' 
              value={formatHexAsDecimal(color.slice(5, 7).toUpperCase())} 
              onChange={updateBlue}/>
          </InputRow>
        </AuxColorControls>

      </ControlColorWrapper>
    </>
  )

}

export default ControlColor;