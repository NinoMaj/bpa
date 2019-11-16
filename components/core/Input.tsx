import React from 'react';
import styled, { css } from 'styled-components';

import { toId } from 'utils/strings';
import { Label } from './Label';

const InputContainerParagraph = styled.p`
  position: relative;
`;

type StyledInputProps = {
  isError?: boolean;
  fullWidth?: boolean;
};

const StyledInput = styled.input<StyledInputProps>`
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  height: 32px;
  padding-bottom: 1px;
  border: none;
  border-bottom: 1px solid;
  outline: 0;
  background: transparent;

  &:hover,
  &:focus {
    padding-bottom: 0;
    border-bottom: 2px solid;
    border-color: ${props => props.theme.colors.secondary};
  }

  ${props =>
    props.isError &&
    css`
      border-color: props.theme.colors.error;
    `}

  /* Remove white background on webkit (Chrome) autofill */
  @keyframes autofill {
    to {
      background: transparent;
    }
  }
  &:-webkit-autofill {
    animation-name: autofill;
    animation-fill-mode: both;
  }
`;

const ErrorMessage = styled.span`
  display: block;
  position: absolute;
  font-size: ${props => props.theme.font.size.smallest};
  color: ${props => props.theme.colors.error};
  margin-top: 2px;
`;

type Props = {
  label: string;
  value: string;
  autocomplete?: string;
  disabled?: boolean;
  errorMessage?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  fullWidth?: boolean;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onFocus?(e: React.ChangeEvent<HTMLInputElement>): void;
  onBlur?(e: React.SyntheticEvent<HTMLInputElement>): void;
};

const Input = ({
  label,
  value,
  autocomplete = 'on',
  disabled,
  errorMessage = '',
  placeholder = '',
  required,
  type = 'text',
  fullWidth = false,
  onBlur,
  onChange,
  onFocus,
}: Props) => {
  return (
    <InputContainerParagraph>
      <Label htmlFor={`input_${toId(label)}`}>
        {label}
        <StyledInput
          disabled={disabled}
          id={`input_${toId(label)}`}
          isError={Boolean(errorMessage)}
          placeholder={placeholder}
          required={required}
          aria-required={required}
          aria-invalid={Boolean(errorMessage)}
          type={type}
          value={value}
          autoComplete={autocomplete}
          fullWidth={fullWidth}
          onFocus={onFocus}
          onChange={onChange}
          onBlur={onBlur}
        />
        {errorMessage && (
          <ErrorMessage aria-live="polite">{errorMessage}</ErrorMessage>
        )}
      </Label>
    </InputContainerParagraph>
  );
};

export { Input };
