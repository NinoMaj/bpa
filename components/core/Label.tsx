import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: ${props => props.theme.font.size.small};
  margin-bottom: 2px;
`;

type Props = {
  children: ReactNode;
  htmlFor: string;
};

const Label = ({ children, htmlFor }: Props) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export { Label };
