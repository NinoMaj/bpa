import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  color: ${props => props.theme.colors.secondary};

  &:link {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }

  &:active {
    text-decoration: underline;
  }
`;

type Props = {
  children: React.ReactNode;
  href: string;
};

const ExternalLink = ({ href, children }: Props) => {
  return (
    <A href={href} target="_blank" rel="noopener noreferrer">
      {children} (opens in a new window)
    </A>
  );
};

export { ExternalLink };
