import * as React from 'react';
import styled from 'styled-components';

interface ControlPanelProps {
  controls: React.ReactNode[];
}

const ControlPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 50%;
  height: 100%;
  padding: 64px;
  background-color: red;
`

const ControlPanel = ({controls}: ControlPanelProps) => {
  return (
    <ControlPanelContainer>
      {controls}
    </ControlPanelContainer>
  )
}

export default ControlPanel;