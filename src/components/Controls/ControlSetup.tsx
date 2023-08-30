import * as React from 'react';
import { FormProps, HexColor } from '~types';
import { 
  ControlForm, 
  ControlLabel, 
  ControlText, 
  ControlNumber 
} from '~components/Controls/Atoms';
import ControlColor from '~components/Controls/Molecules/ControlColor';
import ControlDoubleNumber from './Molecules/ControlDoubleNumber';

interface SetupProps extends FormProps {};

const Setup = ({cardForm, setForm}: SetupProps) => {
  const updateSetName = (setName: string) => {
    setForm({ ...cardForm, setName });
  }

  const updateHeight = (height: number) => {
    setForm({ ...cardForm, height });
  }

  const updateWidth = (width: number) => {
    setForm({ ...cardForm, width });
  }

  const updateBgColor = (color: HexColor) => {
    setForm({ ...cardForm, backgroundColor: color });
  }

  return (
    <ControlForm>
      <ControlLabel label='setup' />
      <ControlText 
        id='setName'
        label='set name'
        placeholder='fishing game v6.2'
        content={cardForm.setName}
        update={updateSetName} />
      <ControlDoubleNumber 
        controlOne={({
          id: 'height', 
          label: 'height (px)', 
          value: cardForm.height, 
          update: updateHeight
        })}
        controlTwo={({
          id: 'width', 
          label: 'width (px)', 
          value: cardForm.width, 
          update: updateWidth
        })}
      />

      <ControlColor 
        id='bgColor'
        label='background color'
        defaultColor={cardForm.backgroundColor || '#ffffff'}
        update={updateBgColor} />
    </ControlForm>
  )
}

export default Setup;