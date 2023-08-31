import * as React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { ControlInput, ControlPair } from '~components/Controls/Atoms';

interface ControlTextProps {
  id: string;
  content: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  update: (content: string) => void;
}

const ControlText = ({id, label, placeholder, disabled, content, update}: ControlTextProps) => {
  const invalidInputRegex = /[^a-zA-Z0-9_ ]/g;

  const uniqueId = `${id}_${uuidv4()}`;
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const validatedString = e.currentTarget.value.replace(invalidInputRegex, '');
    update(validatedString);
  }

  return (
    <ControlPair>
      { label && <label htmlFor={uniqueId}>{label}</label> }
      <ControlInput 
        type='text' 
        id={uniqueId}
        value={content} 
        onChange={onChange} 
        disabled={disabled === undefined ? false : disabled /* weird but allows undefined or T/F 🤷 */ }
        placeholder={placeholder || 'text goes here'} />
    </ControlPair>
  )
}

export default ControlText;