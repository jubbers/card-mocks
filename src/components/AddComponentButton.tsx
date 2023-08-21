import * as React from 'react';
import styled from 'styled-components';
import { CardForm } from '~types';
import { v4 as uuidv4 } from 'uuid';
import PlusIcon from '~/assets/plus-icon.png';

interface AddComponentButtonProps {
  cardForm: CardForm;
  setForm: (form: CardForm) => void;
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #252526;
  padding: 6px;

  border: 2px solid #2D2D30;
  border-radius: 4px;
`

const SizedIcon = styled.img`
  height: 16px;
  width: auto;
  margin-left: 6px;
`

const AddComponentButton = ({cardForm, setForm,}: AddComponentButtonProps) => {
  const createNewTemplateComponent = (_: React.MouseEvent<HTMLButtonElement>) => {
    const formCopy = {...cardForm};
    formCopy.components.push({
      id: `generated_component_name_${formCopy.components.length}`,
      content: '',
      horizontal: { type: 'center'},
      vertical: { type: 'center'},
    })
    setForm(formCopy);
  }

  return (
  <StyledButton onClick={createNewTemplateComponent}>
    Add New Component To Template <SizedIcon src={PlusIcon} />
  </StyledButton>)

}

export default AddComponentButton;