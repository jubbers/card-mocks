import * as React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => {};
}

const StyledButton = styled.button`
  width: 100%;

`

const Button = ({text, onClick}: ButtonProps) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>
}

export default Button;