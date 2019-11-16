import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { SkipNavLink } from '@reach/skip-nav';

import { ROUTES } from 'consts/routes';
import { Button } from './core/Button';
import { useUserState, logoutUser, useUserDispatch } from 'contexts/user';

const StyledHeader = styled.header`
  height: ${props => `${props.theme.header.height}px`};
`;

const StyledSkipNavLink = styled(SkipNavLink)`
  left: -99999px;
  position: absolute;

  &:focus {
    position: static;
  }
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.ul`
  flex: 1;
`;

const LogoutLi = styled.ul`
  width: 70px;
`;

const A = styled.a`
  display: inline-block;
  margin: 0 4px;
  padding: 8px 15px;

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

const HiddenTitle = styled.h1`
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  position: absolute;
`;

type Props = {
  pathname?: string;
};

const Header = ({ pathname }: Props) => {
  const { user, isLoading } = useUserState();
  const dispatch = useUserDispatch();
  const handleLogout = () => {
    logoutUser(dispatch);
  };

  return (
    <StyledHeader>
      <StyledSkipNavLink tabIndex="0" />
      <HiddenTitle className="visually-hidden" aria-hidden="true">
        BPA
      </HiddenTitle>
      <nav>
        <Ul>
          <Li>
            <Link href={ROUTES.homepage.path} prefetch passHref>
              <A
                className={pathname === ROUTES.homepage.path ? 'is-active' : ''}
              >
                Home
              </A>
            </Link>
          </Li>
          {!user ? (
            <React.Fragment>
              <li>
                <Link href={ROUTES.login.path} prefetch passHref>
                  <A
                    className={
                      pathname === ROUTES.login.path ? 'is-active' : ''
                    }
                  >
                    Login
                  </A>
                </Link>
              </li>
              <li>
                <Link href={ROUTES.register.path} prefetch passHref>
                  <A
                    className={
                      pathname === ROUTES.register.path ? 'is-active' : ''
                    }
                  >
                    Register
                  </A>
                </Link>
              </li>
            </React.Fragment>
          ) : (
            <LogoutLi>
              <Button onClick={handleLogout} isLoading={isLoading} fullWidth>
                Log out
              </Button>
            </LogoutLi>
          )}
        </Ul>
      </nav>
    </StyledHeader>
  );
};

export { Header };
