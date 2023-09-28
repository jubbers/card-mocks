import * as React from 'react';
import styled from 'styled-components';
import { ControlPair, ControlText, Modal } from '~components/atoms';
import { ModalProps } from '~components/atoms/Modal';

interface DialogueTextConfirmProps extends ModalProps {
  label: string;
  inputContent: string;
  inputUpdate: (s: string) => void;
}

const DialogueText = ({ buttonContent, inputContent, label, visible, removeAction, continueAction, inputUpdate }: DialogueTextConfirmProps) => {
  return (
    <Modal 
      visible={visible} 
      removeAction={removeAction} 
      buttonContent={buttonContent} 
      continueAction={continueAction}>
      <ControlPair>
        <label htmlFor={'control-dialogue-box'}>{label}</label>
        <ControlText 
          autoFocus={true}
          id={'control-dialogue-box'}
          content={inputContent}  
          updateContent={inputUpdate} />
      </ControlPair>
    </Modal>
  )
}

export default DialogueText