import * as React from 'react';
import { Alignment, CardComponent, FormProps } from '~types';
import { ControlForm } from '~components/Controls/Atoms/ControlStyles';
import ControlLabel from '~components/Controls/Atoms/ControlLabel';
import ControlText from '~components/Controls/Atoms/ControlText';
import ControlRemoveButton from '~components/Controls/ControlTemplateRemoveButton.tsx';
import ControlSelect from './Atoms/ControlSelect';
import ControlAlignment from './Molecules/ControlAlignment';

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

  const updateVerticalAlignment = (newAlignment: Alignment) => {
    const formCopy = {...cardForm};
    formCopy.components[index] = { ...formCopy.components[index], vertical: newAlignment }
    setForm(formCopy);
  }

  return (
    <ControlForm>
      { removeable && <ControlRemoveButton cardForm={cardForm} setForm={setForm} index={index} /> }

      <ControlLabel label={component.id || 'id required'}/>

      <ControlText 
        content={component.id}
        id={`component_${index}_id`}
        label='id'
        placeholder='column name on your excel doc'
        update={updateId} />

      <ControlText 
        content={component.content}
        id={`component_${index}_content`}
        label='placeholder content'
        placeholder='your placeholder info goes here'
        update={updateContent} />

      <ControlAlignment 
        component={cardForm.components[index]}
        id={`component_${index}_horizontal-alignment`}
        isHorizontal={true}
        label={'horizontal alignment'}
        update={updateHorizontalAlignment} />

      <ControlAlignment 
        component={cardForm.components[index]}
        id={`component_${index}_vertical-alignment`}
        isHorizontal={false}
        label={'vertical alignment'}
        update={updateVerticalAlignment} />
    </ControlForm>
  )
}

export default ComponentControl;