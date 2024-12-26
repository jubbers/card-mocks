import * as React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Header } from '~components/organisms';
import { Root, Body } from '~components/pages';

const CenteredBody = styled(Body)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center; 
  gap: 32px;
`;

const ErrorPage = () => {
  return (
    <Root>
      <Header />
      <CenteredBody>
        <h1>Uh oh, you're not <br/>supposed to be here.</h1>
        <p>If you think this is a mistake, submit an <br/>
        <em><a href='https://github.com/jubbers/card-mocks/issues'>[issue on GitHub]</a></em> and I'll take a look.</p>
        <h3><em><Link to='/'>[return to the home page]</Link></em></h3>
      </CenteredBody>
    </Root>
  )
}

export default ErrorPage;