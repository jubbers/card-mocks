
import styled from 'styled-components';

const ControlForm = styled.form`
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

const ControlInput = styled.input`
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

const ControlPair = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: #A8A8A8;
  }
`;

const SideBySideNumbers = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;

  div {
    display: flex;
    flex: 1;
  }
`

const SideBySideAlignment = styled.div`
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
`

export {
  ControlForm,
  ControlInput,
  ControlPair,
  SideBySideNumbers,
  SideBySideAlignment,
}