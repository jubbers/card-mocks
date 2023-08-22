import * as React from 'react';
import styled from 'styled-components';

const DividerContainer = styled.div`
  display: flex;
  align-items: center;
`

const DividerLine = styled.div`
  width: 2px;
  height: 100%;
  background-color: #3E3E42;
`

const Divider = () => {
  return <DividerContainer><DividerLine /></DividerContainer>
}

export default Divider;