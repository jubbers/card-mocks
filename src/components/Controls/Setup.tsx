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

const Setup = ({form, setForm}: SetupProps) => {
  const updateSetName = () => {

  }

  const updateHeight = () => {

  }

  const updateWidth = () => {
    
  }

  return (
    <ControlForm>
      <ControlLabel label='setup' />
      <ControlText 
        id='setName'
        label='set name'
        placeholder='fishing game v6.2' />
      <ControlNumber
        id='height'
        label='height (px)'
        defaultValue={1125} />
      <ControlNumber
        id='width'
        label='width (px)'
        defaultValue={825} />
    </ControlForm>
  )
}

export default Setup;