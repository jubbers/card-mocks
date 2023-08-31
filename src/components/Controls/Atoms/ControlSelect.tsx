import * as React from 'react';
import styled from 'styled-components';


interface ControlSelectProps {
  id: string;
  label?: string;
  defaultIndex: number;
  items: string[];
  values?: string[];
  update: (value: string) => void;
}

const ControlSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: #A8A8A8;
  }

  select {
    width: 100%;
    padding: 4px;
    margin-top: 2px;
    border-radius: 2px;

    background-color: #1E1E1E;
    border: 2px solid #3E3E42;
    color: #FFF;
  }
`

const ControlSelect = ({ id, label, defaultIndex, items, values, update }: ControlSelectProps) => {

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    update(e.target.value)
  }

  const determineOptionValue = (index: number): string => {
    if (!values || !values[index]) return items[index];
    return values[index];
  }

  return (
    <ControlSelectWrapper>
      { label && <label htmlFor={id}>{label}</label> }
      <select id={id} defaultValue={items[defaultIndex]} onChange={onChange}>
        { items.map((item, index) => (
          <option key={`${id}_${index}`} value={determineOptionValue(index)}>{item}</option>
        ))}
      </select>
    </ControlSelectWrapper>
  )
}

export default ControlSelect;