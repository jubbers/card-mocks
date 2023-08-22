import * as React from 'react';
import styled from 'styled-components';

interface ControlPanelProps {
  controls: React.ReactNode[];
}

const ControlPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  gap: 12px;

  width: 50%;
  height: 100%;
  max-height: 100%;
  min-width: 500px;
  padding: 32px;
  overflow: auto;
`

const ControlPanel = ({controls}: ControlPanelProps) => {
  return (
    <ControlPanelContainer>
      {controls}
    </ControlPanelContainer>
  )
}

export default ControlPanel;