import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import { globalStyles } from './globalStyles';
import { resetStyles } from './resetStyles';
import { typography } from './typography';

export const GlobalStyleComponent = createGlobalStyle`
  ${resetStyles}
  ${styledNormalize}
  ${globalStyles}
  ${typography}
`;
