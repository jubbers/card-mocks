import * as React from 'react';
import styled from 'styled-components';
import { ControlButton, ControlPair, ControlText } from '~components/atoms';
import ControlRemoveButton from './ControlRemoveButton';

interface ControlDialogueProps {
  label: string;
  inputContent: string;
  buttonContent: string;
  closeAction: () => void;
  continueAction: () => void;
  updateAction: (s: string) => void;
}

const BackgroundOpacityLayer = styled.div`
  display: flex;
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

const DialogueLabel = styled.label`
  margin-right: 10vw;
`

const DialogueButton = styled(ControlButton)`
  align-self: flex-end;
  width: 50%;
`

const ControlDialogue = ({label, inputContent, buttonContent, continueAction, closeAction, updateAction}: ControlDialogueProps) => {
  return (
    <BackgroundOpacityLayer>
      <ControlModalWrapper>
        <ControlRemoveButton removeAction={closeAction}/>
        <ControlPair>
          <DialogueLabel htmlFor={'control_dialogue_box'}>{label}</DialogueLabel>
          <ControlText 
            id={'control_dialogue_box'}
            content={inputContent}  
            update={updateAction} />
        </ControlPair>
        <DialogueButton onClick={continueAction}>{buttonContent}</DialogueButton>
      </ControlModalWrapper>
    </BackgroundOpacityLayer>
  )
}

export default ControlDialogue