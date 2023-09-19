import * as React from 'react';
import styled from 'styled-components';
import { Alignment, AlignmentType, CardComponent, IntPercent } from '~types';
import { ControlNumber, ControlSelect } from '~components/atoms';

export interface ControlAlignmentProps {
  id: string;
  label: string;
  component: CardComponent;
  isHorizontal: boolean;
  update: (alignment: Alignment) => void;
}

const ControlAlignmentContainer = styled.div`
  width: 100%;

  label { 
    color: #A8A8A8;
  }
`

const InternalAlignmentControlsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  
  div {
    display: flex;
    flex: 1;
  }

  div:first-child input {
    border-right: none;
    border-radius: 4px 0 0 4px;
  }

  div:last-child select {
    padding: 4px 8px;
    border-radius: 0 4px 4px 0;
  }
`

const CenteredNumbers = styled(ControlNumber)`
  text-align: center;
`


const ControlAlignment = ({ id, isHorizontal, label, component, update }: ControlAlignmentProps) => {
  const options = isHorizontal 
    ? ['% on left', 'center', '% on right']
    : ['% on top', 'center', '% on bottom'];

  const componentValue = isHorizontal
    ? component.horizontal.percentage
    : component.vertical.percentage;

  const defaultSelectIndex: number = isHorizontal
    ? ['start', 'center', 'end'].indexOf(component.horizontal.type)
    : ['start', 'center', 'end'].indexOf(component.vertical.type)

  
  const isValueDisabled = (): boolean => {
    return isHorizontal 
      ? component.horizontal.type === 'center' 
      : component.vertical.type === 'center'
  }

  const updateAlignmentType = (newType: string) => {
    // typesafe shenanigans
    let typeChecked: AlignmentType;
    if (['start', 'center', 'end'].includes(newType))  {
      typeChecked = newType as AlignmentType;
    } else {
      console.log(`Invalid alignment type passed [${newType}], escaping early`);
      return;
    }

    // actually update
    const alignmentCopy: Alignment = isHorizontal ? component.horizontal : component.vertical;
    alignmentCopy.type = typeChecked;
    update(alignmentCopy);
  }

  const updateAlignmentPercentage = (newPercentage: number) => {
    const alignmentCopy: Alignment = isHorizontal ? component.horizontal : component.vertical;
    if (newPercentage % 1 !== 0) {
      // TODO: Add in a notification app to give this info back to users
      // This seems more stable than noty was -> https://www.npmjs.com/package/react-toastify
      console.log(`Non-integer detected [${newPercentage}], skipping update...`)
      return;
    } else if (newPercentage < 0 || newPercentage > 100) {
      console.log(`Integer passed outside acceptable range [${newPercentage}], skipping update...`);
      return;
    }
    alignmentCopy.percentage = newPercentage as IntPercent || 0;
    update(alignmentCopy);
  }


  return (
    <ControlAlignmentContainer>
      <label htmlFor={`component_${id}_alignment-select`}>{label}</label>
      <InternalAlignmentControlsContainer>
        <CenteredNumbers
          id={`component_${id}_alignment-text`} 
          value={componentValue || 0}
          disabled={isValueDisabled()}
          update={updateAlignmentPercentage} />
        <ControlSelect
          id={`component_${id}_alignment-select`} 
          defaultIndex={defaultSelectIndex} 
          items={options} 
          values={['start', 'center', 'end']}
          update={updateAlignmentType} />
      </InternalAlignmentControlsContainer>

    </ControlAlignmentContainer>
    
  )
}

export default ControlAlignment