import * as React from 'react';
import styled from 'styled-components';
import { ControlButton } from '~components/atoms';
import IconSave from '~assets/icon-save.png';
import IconLoad from '~assets/icon-folder.png';
import IconFolderZip from '~assets/icon-folder-zip.png';

interface SidebarProps {
  saveAction: () => void;
  loadAction: () => void;
}

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 7.5vh;
  height: 100%;
  background-color: #131012;
`

const SidebarButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
  gap: 2px;

  color: #FFF;
  background-color: inherit;
  border: none;
  font-size: 12px;
  font-weight: 100;
  width: 100%;
  transition: 0.2s;

  &:hover {
    background-color: #363335;
    cursor: pointer;
  }

  img {
    width: 24px;
  }
`;



const Sidebar = ({ saveAction, loadAction }: SidebarProps) => {
  return (
    <SidebarContainer>
      <SidebarButton onClick={loadAction} title='load'>
        <img src={IconLoad} alt={'Load Icon'} />
        <h4>load</h4>
      </SidebarButton>
     
      <SidebarButton onClick={saveAction} title='save'>
        <img src={IconSave} alt={'Save Icon'} />
        <h4>save</h4>
      </SidebarButton>
     
      <SidebarButton onClick={saveAction} title='save'>
        <img src={IconFolderZip} alt={'Save Icon'} />
        <h4>export</h4>
      </SidebarButton>
    </SidebarContainer>
  )
}

export default Sidebar;