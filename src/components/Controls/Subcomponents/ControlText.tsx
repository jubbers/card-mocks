import * as React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { ControlInput, ControlPair } from '~components/Controls/Subcomponents';

interface ControlTextProps {
  id: string;
  label: string;
  placeholder: string;
  content: string;
  update: (content: string) => void;
}

const ControlText = ({id, label, placeholder, content, update}: ControlTextProps) => {
  const invalidInputRegex = /[^a-zA-Z0-9_ ]/g;

  const uniqueId = `${id}_${uuidv4()}`;
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const validatedString = e.currentTarget.value.replace(invalidInputRegex, '');
    update(validatedString);
  }

  return (
    <ControlPair>
      <label htmlFor={uniqueId}>{label}</label>
      <ControlInput 
        type='text' 
        id={uniqueId}
        value={content} 
        onChange={onChange} 
        placeholder={placeholder} />
    </ControlPair>
  )
}

export default ControlText;