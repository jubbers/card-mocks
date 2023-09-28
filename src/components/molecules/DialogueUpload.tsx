import * as React from 'react';
import styled from 'styled-components';
import { ControlPair, Upload } from '~components/atoms';
import Modal, { ModalProps } from '~components/atoms/Modal';
import { parseArrayFromCsv } from '~components/export-helpers';

interface DialogueUploadProps extends ModalProps {
  label: string;
  onFileUpload: (f: File) => Promise<boolean>;
}

const DialogueUpload = ({label, buttonContent, visible, continueAction, removeAction, onFileUpload}: DialogueUploadProps) => {
  
  return (
    <Modal 
      visible={visible} 
      removeAction={removeAction} 
      buttonContent={buttonContent} 
      continueAction={continueAction}>
      <ControlPair>
        <label htmlFor={`dialogue-upload-${label}`}>{label}</label>
        <Upload id={`dialogue-upload-${label}`} onFileUpload={onFileUpload} />
      </ControlPair>
    </Modal>
  )
}

export default DialogueUpload;