import { css } from 'styled-components';

export const typography = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,600&display=swap');
  html {
    font-size: 1px; /*for using REM units*/
  }
  body {
    direction: ltr;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-size: ${props => props.theme.font.size.normal};
    font-weight: 400;
    line-height: 1.3;
    color: ${props => props.theme.colors.text.main};
  }
`;
