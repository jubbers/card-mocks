import * as React from 'react';
import { FormProps, HexColor } from '~types';
import { 
  ControlForm, 
  ControlLabel, 
  ControlText, 
  ControlNumber 
} from '~components/Controls/Subcomponents';
import ControlColor from '~components/Controls/Subcomponents/ControlColor';

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

  const updateBgColor = (color: HexColor) => {
    setForm({ ...form, backgroundColor: color });
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
      <ControlColor 
        id='bgColor'
        label='background color'
        defaultColor={form.backgroundColor || '#ffffff'}
        update={updateBgColor} />
    </ControlForm>
  )
}

export default Setup;