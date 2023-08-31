import * as React from 'react';
import styled from 'styled-components';
import { Alignment, CardComponent, FormProps, HexColor } from '~types';
import { ControlForm, SideBySideAlignment } from '~components/Controls/Atoms/ControlStyles';
import ControlLabel from '~components/Controls/Atoms/ControlLabel';
import ControlText from '~components/Controls/Atoms/ControlText';
import ControlAlignment from '~components/Controls/Molecules/ControlAlignment';
import ControlRemoveButton from '~components/Controls/ControlTemplateRemoveButton.tsx';
import { ControlColor } from '~components/Controls/Atoms';

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

  const updateTextColor = (newColor: HexColor) => {
    const formCopy = {...cardForm};
    formCopy.components[index] = { ...formCopy.components[index], textColor: newColor }
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


      <SideBySideAlignment>
        <ControlAlignment 
          component={cardForm.components[index]}
          id={`component_${index}_horizontal-alignment`}
          isHorizontal={true}
          label={'horizizontal alignment'}
          update={updateHorizontalAlignment} />
        <ControlAlignment 
          component={cardForm.components[index]}
          id={`component_${index}_vertical-alignment`}
          isHorizontal={false}
          label={'vertical alignment'}
          update={updateVerticalAlignment} />
      </SideBySideAlignment>


      <ControlColor 
        defaultColor={component.textColor}
        id={`component_${index}_text-color`}
        label={'text color'}
        update={updateTextColor}/>
    </ControlForm>
  )
}

export default ComponentControl;