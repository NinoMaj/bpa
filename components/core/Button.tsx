import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { Loader } from '../core/Loader';

type StyledButtonProps = {
  fullWidth: boolean;
  inactive: boolean;
  secondary: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  height: 40px;
  padding: 4px 8px;
  color: ${props => props.theme.colors.text.secondary};
  font-weight: 600;
  border-radius: 4px;
  border-color: ${props => props.theme.colors.main};
  background: ${props => props.theme.colors.main};

  &:hover {
    cursor: pointer;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${props => props.theme.colors.text.white};
      background: ${props => props.theme.colors.secondary};
      border-color: ${props => props.theme.colors.secondary};
    `}

  ${({ inactive }) =>
    inactive &&
    css`
      color: ${props => props.theme.colors.text.secondary};
      background: ${props => props.theme.colors.inactive};
      border-color: ${props => props.theme.colors.inactive};

      &:hover {
        cursor: auto;
      }
    `}
`;

type Props = {
  children?: ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  isLoading?: boolean;
  secondary?: boolean;
  type?: 'button' | 'reset' | 'submit';
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
};

const Button = ({
  children,
  disabled = false,
  fullWidth = false,
  isLoading = false,
  secondary = false,
  type = 'button',
  onClick,
}: Props) => {
  console.log(isLoading, Loader);
  return (
    <StyledButton
      disabled={disabled}
      fullWidth={fullWidth}
      inactive={disabled}
      secondary={secondary}
      type={type}
      onClick={onClick}
    >
      {isLoading ? <Loader small /> : children}
    </StyledButton>
  );
};

export { Button };
