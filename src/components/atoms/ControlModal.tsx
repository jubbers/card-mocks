import * as React from 'react';
import styled from 'styled-components';
import { ControlRemoveButton } from '~components/molecules';

interface ControlModalProps {
  visible: boolean;
  children: React.ReactNode;
  removeAction: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
}

const BackgroundOpacityLayer = styled.div<{ visible: boolean; }>`
  display: ${(props) => props.visible ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color:  rgba(0,0,0,0.75);
  z-index: 100;
`

const ControlModalWrapper = styled.div`
  opacity: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  color: #EDEDED;
  background-color: #1E1E1E;
  border: 2px solid #2D2D30;
  padding: 32px;
  border-radius: 6px;
  gap: 12px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ControlModal = ({ visible, children, removeAction }: ControlModalProps) => {
  return (
  <BackgroundOpacityLayer visible={visible}>
    <ControlModalWrapper>
      <ControlRemoveButton removeAction={removeAction}/>
      { children }
    </ControlModalWrapper>
  </BackgroundOpacityLayer>
  )
}

export default ControlModal;