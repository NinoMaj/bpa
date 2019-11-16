import React, { ReactNode } from 'react';
import NextLink from 'next/link';
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
  children: ReactNode;
  href: string;
};

const Link = ({ children, href }: Props) => {
  return (
    <NextLink href={href} passHref>
      <A>{children}</A>
    </NextLink>
  );
};

export { Link };
