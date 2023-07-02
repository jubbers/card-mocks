import * as React from 'react';
import styled from 'styled-components';

interface ControlLabelProps {
  label: string;
}

const ControlLabelContainer = styled.div`
  h3 {
    font-size: 32pt;
  }

  hr {
    background-color: #3E3E42;
  }
`;

const ControlLabel = ({label}: ControlLabelProps) => {
  return (
    <ControlLabelContainer>
      <h3>{label}</h3>
      <hr />
    </ControlLabelContainer>
  );
}

export default ControlLabel;