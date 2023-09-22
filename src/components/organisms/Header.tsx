import * as React from 'react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import cardPath from '~assets/icon-cards.png';
import { Link } from 'react-router-dom';
import { ControlButton } from '~components/atoms';


interface HeaderProps {
  saveAction?: () => void;
  loadAction?: () => void;
}

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;

  height: 7.5vh;
  padding: 4px 64px;
  background-color: #131012;
  z-index: 99; //100+ reserved for overlays
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  align-items: center;

  img {
    height: 32px;
  }

  h1 {
    font-weight: 100;
  }
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const HeaderButton = styled(ControlButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px;
  gap: 6px;
  cursor: pointer;  

  img {
    width: 20px;
  }
`;


const Header = ({ saveAction, loadAction }: HeaderProps) => {
  // let allowSave: boolean = true;

  useEffect(() => {
    /* Currently bugged, fix before release
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
    */
  })
  
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <Logo>
          <img src={cardPath} />
          <h1>Mock Cards</h1>
        </Logo>
      </Link>

      <Buttons>



      </Buttons>
    </HeaderContainer>
  )
}

export default Header;