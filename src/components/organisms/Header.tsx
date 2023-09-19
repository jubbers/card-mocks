import * as React from 'react';
import styled from 'styled-components';
import cardPath from '~assets/icon-cards.png';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;

  height: 7.5vh;
  padding: 4px 64px 0px 64px;
  border-bottom: 2px solid #3E3E42;
  background-color: #1E1E1E;
  z-index: 99; //100+ reserved for modal style overlays
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

const Header = () => {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <Logo>
            <img src={cardPath} />
            <h1>Mock Cards</h1>
        </Logo>
      </Link>
    </HeaderContainer>
  )
}

export default Header;