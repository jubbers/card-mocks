import * as React from 'react';
import styled from 'styled-components';
import IconSave from '~assets/icon-save.png';
import IconLoad from '~assets/icon-folder.png';
import IconCard from '~assets/icon-card.png';
import IconZip  from '~assets/icon-folder-zip.png'

interface SidebarProps {
  saveAction: () => void;
  loadAction: () => void;
  exportSampleAction: () => void;
  exportAllAction: () => void;
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
  padding: 10px 0;
  gap: 4px;

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

  h4 {
    font-weight: 300;
  }
`;



const Sidebar = ({ saveAction, loadAction, exportSampleAction, exportAllAction }: SidebarProps) => {
  /* Currently bugged, fix before release to allow ctl+s saving
  // let allowSave: boolean = true;

  useEffect(() => {
    if (saveAction === undefined) return;
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 's' && !e.repeat) {
        e.preventDefault();
        if (!allowSave) return;
        allowSave = false;
        saveAction();
      }
    })
    document.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.ctrlKey || e.key === 's') allowSave = true;
    });
  })
  */

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
     
      <SidebarButton onClick={exportSampleAction} title='export sample'>
        <img src={IconCard} alt={'Export Icon'} />
        <h4>export sample</h4>
      </SidebarButton>

      <SidebarButton onClick={exportAllAction} title='full export button'>
        <img src={IconZip} alt={'Export Icon'} />
        <h4>export all</h4>
      </SidebarButton>
    </SidebarContainer>
  )
}

export default Sidebar;