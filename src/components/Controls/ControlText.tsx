import * as React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { ControlInput, ControlPair } from '~components/Controls';

interface ControlTextProps {
  id: string;
  label: string;
  placeholder: string;
}


const ControlText = ({id, label, placeholder}: ControlTextProps) => {
  const [content, setContent] = React.useState('')
  const invalidInputRegex = /[^a-zA-Z0-9_ ]/g;

  const uniqueId = `${id}_${uuidv4()}`;
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const validatedString = e.currentTarget.value.replace(invalidInputRegex, '');
    setContent(validatedString);
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