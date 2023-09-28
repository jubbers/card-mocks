import * as React from 'react';
import { 
  ControlTextArea, 
  ControlInput, 
  ControlPair 
} from '~components/atoms';

interface ControlTextProps {
  content: string;
  disabled?: boolean;
  id: string;
  label?: string;
  placeholder?: string;
  textArea?: boolean;
  autoFocus?: boolean;
  updateContent: (content: string) => void;
}

const ControlText = ({ autoFocus, content, disabled, id, label, placeholder, textArea, updateContent: update}: ControlTextProps) => {
  const invalidInputRegex = /[^a-zA-Z0-9_\- .()#,&]/g;
  const invalidTextAreaRegex = /\p{L}/g;

  const textInputOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const validatedString = e.currentTarget.value.replace(invalidInputRegex, '');
    update(validatedString);
  }

  const textAreaOnChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const validatedString = e.currentTarget.value.replace(invalidTextAreaRegex, '');
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
            autoFocus={autoFocus}
            placeholder={placeholder || 'text goes here'} />
        : <ControlInput 
            type='text' 
            id={id}
            value={content} 
            onChange={textInputOnChange} 
            autoFocus={autoFocus}
            disabled={disabled === undefined ? false : disabled }
            placeholder={placeholder || 'text goes here'} />
      }
      
    </ControlPair>
  )
}

export default ControlText;