import * as React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { ControlInput, ControlPair } from '~components/Controls/Atoms';

export interface ControlNumberProps {
  disabled?: boolean;
  id: string;
  label?: string;
  update: (value: number) => void;
  value: number;
}

const NumberInput = styled(ControlInput)`
  -moz-appearance: textfield;
  appearance: textfield;
`

const ControlNumber = ({ disabled, id, label, update, value}: ControlNumberProps) => {
  const uniqueId = `${id}_${uuidv4()}`;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === '') {
      update(0);
      return;
    }
    const newValue: number = parseInt(e.currentTarget.value || '0', 10);
    if (!!newValue) update(newValue);
  
  }

  return (
    <ControlPair>
      { label && <label htmlFor={uniqueId}>{label}</label> }
      <NumberInput
        type={'number'}
        id={uniqueId}
        value={disabled ? '' : value}
        disabled={disabled === undefined ? false : disabled /* weird but allows undefined or T/F 🤷 */}
        onChange={onChange} />
    </ControlPair>
  )
}

export default ControlNumber;