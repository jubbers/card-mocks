import * as React from 'react';
import styled from 'styled-components';
import IconClose from '~assets/icon-close.png';
import { FormProps } from '~types';

interface ControlRemoveButtonProps {
  removeAction: () => void;
}

const RemoveButton = styled.button`
  position: absolute;
  float: right;
  top: 0;
  right: 0;
  margin: -6px;
  height: 18px;
  width: 18px;

  background-color: #252526;
  border: 2px solid #f33f4e;
  border-radius: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 2px solid #ff7985;
  }

  &:active {
    border: 2px solid #fdc9cd;
  }
`

const RemoveIcon = styled.img`
  height: 10px;
`

const ControlRemoveButton = ({ removeAction }: ControlRemoveButtonProps) => {
  return (
    <RemoveButton onClick={removeAction}>
      <RemoveIcon title='remove' alt='remove icon' src={IconClose} />
    </RemoveButton>
  )
}

export default ControlRemoveButton;