import styled from 'styled-components';

import { hexToRgb } from 'utils/colors';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.theme.colors.text.secondary};
  width: 90%;
  min-width: 300px;
  max-width: 400px;
  padding: 32px;
  border-radius: 4px;
  border: ${props => `1px solid ${props.theme.colors.palette.black}`};
  background: ${props =>
    `rgba(${hexToRgb(props.theme.colors.palette.white)}, 0.6)`};
  box-shadow: ${props => props.theme.boxShadow};

  > p {
    margin-bottom: 32px;
  }

  > div {
    margin-bottom: 16px;
  }
`;

export { Form };
