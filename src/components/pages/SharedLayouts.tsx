import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

const Body = styled.main`
  display: flex;
  flex-direction: row;
  flex: 1;
  overflow: hidden; /* stop canvas from expanding */
`

export {
  Root,
  Body
}