import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import 'isomorphic-unfetch';

import { GlobalStyleComponent } from 'styles/GlobalStylesComponent';
import { Header } from 'components/Header';
import { OfflineSupport } from 'components/OfflineSupport';
import { theme } from 'styles/theme';
import { UserProvider } from 'contexts/user';
import { AppContextType, AppInitialProps } from 'next-server/dist/lib/utils';
import { NextRouter } from 'next/router';
import { parseCookies } from 'utils/parseCookies';

const AppContainer = styled.div`
  height: 100%;
  padding: ${theme.app.padding}px;
`;

export default class MyApp extends App {
  public static async getInitialProps({
    Component,
    ctx,
  }: AppContextType<NextRouter>): Promise<AppInitialProps> {
    // console.log('ctx.req.headers.cookie', ctx.req && ctx.req.headers.cookie);
    // const user = req && req.session ? req.session.decodedToken : null;
    const cookies = parseCookies(ctx);

    const props = {
      pageProps: {},
      user: cookies.user ? JSON.parse(cookies.user) : null,
    };

    // if (user) {
    // const user = getTokenPayload(loginToken);
    // If the user is null then the loginToken is invalid
    // if (user === null) removeToken(ctx);
    // props.user = user || undefined;
    // }

    if (Component.getInitialProps) {
      props.pageProps = await Component.getInitialProps(ctx);
    }

    return props;
  }

  public render() {
    // @ts-ignore
    const { Component, user } = this.props;

    return (
      <Container>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Best auth example you can ever find."
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta property="og:title" content="Best pratices app." />
          <meta property="og:site_name" content="BPA" />
          <meta property="og:url" content="https://www.majder.com" />
          <meta property="og:type" content="blog" />
          <meta property="og:image" content="https://majder/majder-logo.jpg" />
          <meta property="og:description" content="Example app" />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            crossOrigin="anonymous"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <UserProvider user={user}>
            <AppContainer>
              <OfflineSupport />
              <GlobalStyleComponent />
              <Header />
              <Component />
            </AppContainer>
          </UserProvider>
        </ThemeProvider>
      </Container>
    );
  }
}
