import * as React from 'react';
import styled from 'styled-components';
import { ControlButton } from '~components/atoms';
import { ControlRemoveButton } from '~components/molecules';
import IconEdit from '~assets/icon-edit.png';
import IconCopy from '~assets/icon-copy.png';
import IconTrash from '~assets/icon-trash-bin.png';

interface ControlTemplateLoaderProps {
  templateKey: string;
  modified: string;

  actionCloseDialogue: (key: string) => void;
  actionEdit: (key: string) => void;
  actionCopy: (key: string) => void;
  actionDelete: (key: string) => void;
}

const TemplateLoaderWrapper = styled.li`
  display: flex;
  flex-direction: row;
  gap: 4px;
  min-height: 32px;

  :first-child {
    flex: 1;
  }
`

const LoaderButton = styled(ControlButton)`
  width: 32px;
  height: 32px;

  :last-child {
    text-align: right;
  }
`

// TODO: Fix length of this somehow
const ControlTemplateLoader = ({
  templateKey, modified, actionCloseDialogue, actionEdit, actionCopy, actionDelete
}: ControlTemplateLoaderProps) => {

  return (
    <TemplateLoaderWrapper>
      <LoaderButton onClick={() => actionEdit(templateKey)}>
        <p>{templateKey}</p>
        <p>{modified}</p>
      </LoaderButton>
      <LoaderButton onClick={() => actionEdit(templateKey)}>
        <img src={IconEdit} alt={'edit icon'} />
      </LoaderButton>
      <LoaderButton onClick={() => actionCopy(templateKey)}>
        <img src={IconCopy} alt={'copy icon'} />
      </LoaderButton>
      <LoaderButton onClick={() => actionDelete(templateKey)}>
        <img src={IconTrash} alt={'delete icon'} />
      </LoaderButton>
    </TemplateLoaderWrapper>
  )
}

export default ControlTemplateLoader;