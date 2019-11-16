import { css } from 'styled-components';

export const globalStyles = css`
  html,
  body {
    height: 100%;
    background: ${props => props.theme.colors.appBackground};
    color: ${props => props.theme.colors.palette.white};
  }
  #__next {
    height: 100%;
  }
`;
