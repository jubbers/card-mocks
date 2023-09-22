import * as React from 'react';
import styled from 'styled-components';
import { ControlButton, ControlPair, ControlText } from '~components/atoms';
import ControlModal from '~components/atoms/ControlModal';
import { ControlRemoveButton } from '~components/molecules';

interface ControlDialogueProps {
  label: string;
  visible: boolean;
  inputContent: string;
  buttonContent: string;

  closeAction: (e: React.MouseEvent<HTMLButtonElement>) => void;
  continueAction: () => void;
  updateAction: (s: string) => void;
}

const DialogueLabel = styled.label`
  margin-right: 10vw;
`

const DialogueButton = styled(ControlButton)`
  align-self: flex-end;
  width: 50%;
`

const ControlDialogue = ({ buttonContent, inputContent, label, visible, closeAction, updateAction, continueAction }: ControlDialogueProps) => {
  return (
    <ControlModal visible={visible} removeAction={closeAction}>
      <ControlPair>
        <DialogueLabel htmlFor={'control-dialogue-box'}>{label}</DialogueLabel>
        <ControlText 
          autoFocus={true}
          id={'control-dialogue-box'}
          content={inputContent}  
          update={updateAction} />
      </ControlPair>
      <DialogueButton onClick={continueAction}>{buttonContent}</DialogueButton>
    </ControlModal>
  )
}

/**
 * 

 */

export default ControlDialogue