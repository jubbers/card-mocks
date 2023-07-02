import * as React from 'react';
import styled from 'styled-components';
import cardPath from '~assets/playing-card.png'

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 7.5vh;
  padding: 4px 64px 0px 64px;
  border-bottom: 2px solid #3E3E42;
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
      <Logo>
        <img src={cardPath} />
        <h1>Mock Cards</h1>
      </Logo>
    </HeaderContainer>
  )
}

export default Header;