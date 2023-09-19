
import styled from 'styled-components';

export const ControlButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: space-between;
  color: #fff;
  background-color: #252526;
  padding: 6px;
  border: 2px solid #2D2D30;
  border-radius: 4px;
  transition: 0.2s;
  text-align: left;

  &:hover {
    background-color: #303031;
    border-color: #37373b;
  }

  &:active {
    background-color: #66666b;
    border-color: #66666b;
  }
`

export const ControlForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 500px;
  gap: 16px;
  padding: 16px 32px 24px;
  background-color: #252526;
  border: 2px solid #2D2D30;
  border-radius: 4px;
`;

export const ControlInput = styled.input`
  width: 100%;
  padding: 4px;
  margin-top: 2px;
  border-radius: 2px;

  background-color: #1E1E1E;
  border: 2px solid #3E3E42;
  color: #FFF;
  transition: 0.2s;

  &:disabled {
    opacity: 50%;
  }
`

export const ControlTextArea = styled.textarea`
  width: 100%;
  padding: 4px;
  margin-top: 2px;
  border-radius: 2px;
  font-size: 14px;

  background-color: #1E1E1E;
  border: 2px solid #3E3E42;
  color: #FFF;
  transition: 0.2s;

  &:disabled {
    opacity: 50%;
  }
`

export const ControlPair = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: #A8A8A8;
  }
`;

export const SideBySideNumbers = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;

  div {
    display: flex;
    flex: 1;
  }
`

export const SideBySideAlignment = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  div div :first-child {
    display: flex;
    flex: 1;
  }

  div div :last-child {
    display: flex;
    flex: 2;
  }
`;