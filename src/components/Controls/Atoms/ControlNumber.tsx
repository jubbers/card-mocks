import * as React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { ControlInput, ControlPair } from '~components/Controls/Atoms';

export interface ControlNumberProps {
  id: string;
  label?: string;
  value: number;
  update: (value: number) => void;
}

const NumberInput = styled(ControlInput)`
  -moz-appearance: textfield;
  appearance: textfield;
`

const ControlNumber = ({id, label, value, update}: ControlNumberProps) => {
  const uniqueId = `${id}_${uuidv4()}`;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue: number = parseInt(e.currentTarget.value, 10);
    console.log(newValue);
    
    if (!!newValue) {
      update(newValue);
    }
  }

  return (
    <ControlPair>
      { label && <label htmlFor={uniqueId}>{label}</label> }
      <NumberInput 
        type='number'
        id={uniqueId}
        value={value} 
        onChange={onChange}/>
    </ControlPair>
  )
}

export default ControlNumber;