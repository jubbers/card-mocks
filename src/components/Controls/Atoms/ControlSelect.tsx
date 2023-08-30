import * as React from 'react';
import styled from 'styled-components';


interface ControlSelectProps {
  id: string;
  label?: string;
  defaultIndex: number;
  items: string[];
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

const ControlSelect = ({ id, label, defaultIndex, items }: ControlSelectProps) => {
  return (
    <ControlSelectWrapper>
      { label && <label htmlFor={id}>{label}</label> }
      <select id={id} defaultValue={items[defaultIndex]}>
        { items.map((item) => <option>{item}</option>) }
      </select>
    </ControlSelectWrapper>
  )
}

export default ControlSelect;