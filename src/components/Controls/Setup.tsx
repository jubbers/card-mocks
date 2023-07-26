import * as React from 'react';
import styled from 'styled-components';
import { FormProps } from '~types';
import { 
  ControlForm, 
  ControlLabel, 
  ControlText, 
  ControlNumber 
} from '~components/Controls/';

interface SetupProps extends FormProps {};

const Setup = ({cardForm: form, setForm}: SetupProps) => {
  const updateSetName = (setName: string) => {
    setForm({ ...form, setName });
  }

  const updateHeight = (height: number) => {
    setForm({ ...form, height });
  }

  const updateWidth = (width: number) => {
    setForm({ ...form, width });
  }

  return (
    <ControlForm>
      <ControlLabel label='setup' />
      <ControlText 
        id='setName'
        label='set name'
        placeholder='fishing game v6.2'
        content={form.setName}
        update={updateSetName} />
      <ControlNumber
        id='height'
        label='height (px)'
        value={form.height} 
        update={updateHeight}/>
      <ControlNumber
        id='width'
        label='width (px)'
        value={form.width}
        update={updateWidth} />
    </ControlForm>
  )
}

export default Setup;