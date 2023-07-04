import * as React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { ControlInput, ControlPair } from '~components/Controls';

interface ControlNumberProps {
  id: string;
  label: string;
  defaultValue: number;
}

const NumberInput = styled(ControlInput)`
  -moz-appearance: textfield;
  appearance: textfield;
`

const ControlNumber = ({id, label, defaultValue}: ControlNumberProps) => {
  const [value, setValue] = React.useState<number>(defaultValue);
  const uniqueId = `${id}_${uuidv4()}`;
  const invalidInputRegex = /[^0-9]/g;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const validatedString = e.currentTarget.value.replace(invalidInputRegex, '');
    const newValue: number = parseInt(validatedString, 10);
    if (newValue) {
      setValue(newValue);
    }
  }

  return (
    <ControlPair>
      <label htmlFor={uniqueId}>{label}</label>
      <NumberInput 
        type='number'
        id={uniqueId}
        value={value} 
        onChange={onChange}/>
    </ControlPair>
  )
}

export default ControlNumber;