import * as React from 'react';
import { ControlInput, ControlPair } from '~components/Controls/Atoms';
import { ControlTextArea } from './ControlStyles';

interface ControlTextProps {
  content: string;
  disabled?: boolean;
  id: string;
  label?: string;
  placeholder?: string;
  textArea?: boolean;
  update: (content: string) => void;
}

const ControlText = ({ content, disabled, id, label, placeholder, textArea, update}: ControlTextProps) => {
  const invalidInputRegex = /[^a-zA-Z0-9_\r\n ]/g;
  const invalidTextAreaRegex = /[^a-zA-Z0-9_\f ]/g;

  const textInputOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const validatedString = e.currentTarget.value.replace(invalidInputRegex, '');
    update(validatedString);
  }

  const textAreaOnChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const validatedString = e.currentTarget.value.replace(invalidInputRegex, '');
    update(validatedString);
  }

  return (
    <ControlPair>
      { label && <label htmlFor={id}>{label}</label> }
      { 
        textArea
        ? <ControlTextArea 
            id={id}
            value={content} 
            onChange={textAreaOnChange} 
            disabled={disabled === undefined ? false : disabled }
            placeholder={placeholder || 'text goes here'} />
        : <ControlInput 
            type='text' 
            id={id}
            value={content} 
            onChange={textInputOnChange} 
            disabled={disabled === undefined ? false : disabled }
            placeholder={placeholder || 'text goes here'} />
      }
      
    </ControlPair>
  )
}

export default ControlText;