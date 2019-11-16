import React from 'react';
import styled, { css } from 'styled-components';
import Head from 'next/head';
import { SkipNavContent } from '@reach/skip-nav';

type MainProps = {
  center?: boolean;
};

const Main = styled.main<MainProps>`
  min-height: ${props =>
    `calc(100% - ${props.theme.header.height +
      props.theme.app.padding * 2}px)`};
  padding-top: 8px;
  ${props =>
    props.center &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
`;

type Props = {
  children: React.ReactNode;
  title: string;
  center?: boolean;
};

const App = ({ children, center, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <SkipNavContent />
      <Main center={center}>{children}</Main>
    </>
  );
};

export { App };
