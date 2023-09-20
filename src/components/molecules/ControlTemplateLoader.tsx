import * as React from 'react';
import styled from 'styled-components';
import { ControlButton } from '~components/atoms';
import IconEdit from '~assets/icon-edit.png';
import IconCopy from '~assets/icon-copy.png';
import IconTrash from '~assets/icon-trash-bin.png';

interface ControlTemplateLoaderProps {
  templateKey: string;
  modified: string;

  actionEdit: (key: string) => void;
  actionCopy: (key: string) => void;
  actionDelete: (key: string) => void;
}

const TemplateLoaderWrapper = styled.li`
  display: flex;
  flex-direction: row;
  gap: 4px;
  min-height: 32px;

  * {
    cursor: pointer;
  }
`

const LoaderButton = styled(ControlButton)`
  width: 32px;
  height: 32px;
  justify-content: space-between;
`

const FlexButton = styled(LoaderButton)`
  flex: 1;
`

// TODO: Fix length of this somehow
const ControlTemplateLoader = ({
  templateKey, modified, actionEdit, actionCopy, actionDelete
}: ControlTemplateLoaderProps) => {

  return (
    <TemplateLoaderWrapper>
      <FlexButton onClick={() => actionEdit(templateKey)}>
        <p>{templateKey}</p>
        <p>{modified}</p>
      </FlexButton>
      <LoaderButton onClick={() => actionEdit(templateKey)} title={'edit'}>
        <img src={IconEdit} alt={'edit icon'} />
      </LoaderButton>
      <LoaderButton onClick={() => actionCopy(templateKey)} title={'copy'}>
        <img src={IconCopy} alt={'copy icon'} />
      </LoaderButton>
      <LoaderButton onClick={() => actionDelete(templateKey)} title={'delete'}>
        <img src={IconTrash} alt={'delete icon'} />
      </LoaderButton>
    </TemplateLoaderWrapper>
  )
}

export default ControlTemplateLoader;