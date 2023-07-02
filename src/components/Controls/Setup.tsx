import * as React from 'react';
import styled from 'styled-components';
import ControlLabel from `~components/Controls/ControlLabel`;
import { ControlContainer } from '~components/Controls/ControlStyles';

const Setup = () => {
  return (
    <ControlContainer>
      <ControlLabel label='Test Label' />
    </ControlContainer>
  )
}

export default Setup;