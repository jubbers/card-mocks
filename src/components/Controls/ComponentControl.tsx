import * as React from 'react';
import { CardComponent, FormProps } from '~types';
import { ControlForm } from '~components/Controls/ControlStyles';
import ControlLabel from './ControlLabel';
import ControlText from './ControlText';

interface ComponentControlProps extends FormProps {
  index: number;
  component: CardComponent;
}

const ComponentControl = ({cardForm, setForm, index, component}: ComponentControlProps) => {
  const updateId = (newId: string) => {
    const formCopy = {...cardForm};
    formCopy.components[index] = { ...formCopy.components[index], id: newId }
    setForm(formCopy);
  }

  const updateContent = (newContent: string) => {
    const formCopy = {...cardForm};
    formCopy.components[index] = { ...formCopy.components[index], content: newContent }
    setForm(formCopy);
  }

  return (
    <ControlForm>
      <ControlLabel label={component.id || 'id required'} />

      <ControlText 
        id={`component_${index}_id`}
        label='id'
        placeholder='column name on your excel doc'
        content={component.id}
        update={updateId} />

      <ControlText 
        id={`component_${index}_content`}
        label='content'
        placeholder='some text here'
        content={component.content}
        update={updateContent} />

      {/* horizontal (swap to dropdown) */}
      <ControlText 
        id={`component_${index}_horizontal_alignment`}
        label='horizontal alignment'
        placeholder='centered'
        content={'centered'}
        update={()=>{}} />

      {/* vertical (swap to dropdown) */}
      <ControlText 
        id={`component_${index}_vertical_alignment`}
        label='vertical alignment'
        placeholder='centered'
        content={'centered'}
        update={()=>{}}
      />
    </ControlForm>
  )
}

export default ComponentControl;