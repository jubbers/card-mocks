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
import { SideBySideNumbers } from './Atoms/ControlStyles';

interface SetupProps extends FormProps {};

const Setup = ({cardForm, setForm}: SetupProps) => {
  const updateTemplateName = (setName: string) => {
    setForm({ ...cardForm, templateName: setName });
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
      <ControlLabel label='template setup' />

      <ControlText 
        id='setName'
        label='template name'
        placeholder='fishing game v6.2'
        content={cardForm.templateName}
        update={updateTemplateName} />

      <SideBySideNumbers>
        <ControlNumber 
          id={'height'}
          label={'height (px)'}
          value={cardForm.height} 
          update={updateHeight} />
        <ControlNumber 
          id={'width'}
          label={'width (px)'}
          value={cardForm.width} 
          update={updateWidth} />
      </SideBySideNumbers>

      <ControlColor 
        id='bgColor'
        label='background color'
        defaultColor={cardForm.backgroundColor || '#ffffff'}
        update={updateBgColor} />
    </ControlForm>
  )
}

export default Setup;