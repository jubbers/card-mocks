import * as React from 'react';
import styled from 'styled-components';
import ControlNumber, { ControlNumberProps } from '~components/Controls/Atoms/ControlNumber';

interface ControlDoubleNumberProps {
  controlOne: ControlNumberProps;
  controlTwo: ControlNumberProps;
}

const SideBySideControls = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;

  div {
    display: flex;
    flex: 1;
  }
`

const ControlDoubleNumber = ({controlOne, controlTwo}: ControlDoubleNumberProps) => {
  return (
    <SideBySideControls>
      <ControlNumber 
        label={controlOne.label}
        id={controlOne.id} 
        value={controlOne.value} 
        update={controlOne.update} />
      <ControlNumber 
        label={controlTwo.label}
        id={controlTwo.id} 
        value={controlTwo.value} 
        update={controlTwo.update} />
    </SideBySideControls>
  )
}

export default ControlDoubleNumber;
