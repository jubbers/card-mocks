import * as React from 'react';
import styled from 'styled-components';
import cardPath from '~assets/icon-cards.png';
import { Link } from 'react-router-dom';
import { ControlButton } from '~components/atoms';
import IconSave from '~assets/icon-save.png';
import IconLoad from '~assets/icon-folder.png';

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
  border-bottom: 2px solid #3E3E42;
  background-color: #1E1E1E;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px;
  cursor: pointer;  

  img {
    width: 20px;
  }
`;


const Header = ({saveAction, loadAction}: HeaderProps) => (
  <HeaderContainer>
    <Link to={'/'}>
      <Logo>
        <img src={cardPath} />
        <h1>Mock Cards</h1>
      </Logo>
    </Link>

    <Buttons>
      {
        loadAction && 
        <HeaderButton onClick={loadAction} title='load'>
          <img src={IconLoad} alt={'Load Icon'} />
        </HeaderButton>
      }

      {
        saveAction &&
        <HeaderButton onClick={saveAction} title='save'>
          <img src={IconSave} alt={'Save Icon'} />
        </HeaderButton>
      }
    </Buttons>
  </HeaderContainer>
)

export default Header;