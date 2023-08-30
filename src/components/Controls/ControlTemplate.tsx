import * as React from 'react';
import { Alignment, CardComponent, FormProps } from '~types';
import { ControlForm } from '~components/Controls/Atoms/ControlStyles';
import ControlLabel from '~components/Controls/Atoms/ControlLabel';
import ControlText from '~components/Controls/Atoms/ControlText';
import ControlRemoveButton from '~components/Controls/ControlTemplateRemoveButton.tsx';
import ControlSelect from './Atoms/ControlSelect';

interface ComponentControlProps extends FormProps {
  index: number;
  component: CardComponent;
  removable?: boolean;
}

const ComponentControl = ({cardForm, setForm, index, component, removable: removeable}: ComponentControlProps) => {
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

  const updateHorizontalAlignment = (newAlignment: Alignment) => {
    const formCopy = {...cardForm};
    formCopy.components[index] = { ...formCopy.components[index], horizontal: newAlignment }
    setForm(formCopy);
  }

  return (
    <ControlForm>
      { removeable && <ControlRemoveButton cardForm={cardForm} setForm={setForm} index={index} /> }
      
      <ControlLabel label={component.id || 'id required'}/>

      <ControlText 
        id={`component_${index}_id`}
        label='id'
        placeholder='column name on your excel doc'
        content={component.id}
        update={updateId} />

      <ControlText 
        id={`component_${index}_content`}
        label='placeholder content'
        placeholder='your placeholder info goes here'
        content={component.content}
        update={updateContent} />

      <ControlSelect 
        id={`component_${index}_horizontal-alignment`}
        label='horizontal alignment'
        defaultIndex={0}
        items={['percent from left', 'centered', 'percent from right']} 
        update={() => {}}/>

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