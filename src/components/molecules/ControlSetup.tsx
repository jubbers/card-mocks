import * as React from 'react';
import { FormProps, HexColor } from '~types';
import { 
  SideBySideNumbers,
  ControlForm, 
  ControlLabel, 
  ControlText, 
  ControlNumber 
} from '~components/atoms';
import { ControlColor} from '~components/molecules';

interface SetupProps extends FormProps {};

const Setup = ({cardForm, setForm}: SetupProps) => {
  const updateTemplateName = (templateName: string) => setForm({ ...cardForm, templateName });
  const updateHeight = (height: number) => setForm({ ...cardForm, height });
  const updateWidth = (width: number) => setForm({ ...cardForm, width });
  const updatePadding = (padding: number) => setForm({ ...cardForm, padding });
  const updateBgColor = (backgroundColor: HexColor) => setForm({ ...cardForm, backgroundColor });

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

      <ControlNumber 
        id={'padding'}
        label={'padding (px)'}
        value={cardForm.padding}
        update={updatePadding} />

      <ControlColor 
        id='bgColor'
        label='background color'
        defaultColor={cardForm.backgroundColor || '#ffffff'}
        update={updateBgColor} />
    </ControlForm>
  )
}

export default Setup;