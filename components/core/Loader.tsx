import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

type StyleLoaderProps = {
  small: boolean;
  maxSize: boolean;
};

export const StyledLoader = styled.div<StyleLoaderProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;

  &::after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px 1px 5px;
    border-radius: 50%;
    border: ${({ theme, small }) =>
      small
        ? `3px solid ${theme.colors.text.secondary}`
        : `5px solid ${theme.colors.text.secondary}`};
    border-color: ${({ theme }) =>
      `${theme.colors.text.secondary} transparent ${theme.colors.text.secondary} transparent`};
    animation: ${rotate} 1.2s linear infinite;
  }

  ${({ small }) =>
    small &&
    css`
      width: 32px;
      height: 32px;

      &::after {
        width: 23px;
        height: 23px;
      }
    `}

  ${({ maxSize }) =>
    maxSize &&
    css`
      width: auto;
      height: auto;
      min-width: 100%;
      min-height: 100%;
    `}
`;

type Props = {
  small?: boolean;
  maxSize?: boolean;
  className?: string;
};

const Loader = ({ maxSize = false, small = false, className }: Props) => (
  <StyledLoader small={small} maxSize={maxSize} className={className} />
);

export { Loader };
