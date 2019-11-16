import React from 'react';
import styled from 'styled-components';

import { toId } from 'utils/strings';
import { Label } from './Label';

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  margin-right: 16px;

  &:active,
  &:focus {
    outline: ${props => `solid 2px ${props.theme.colors.secondary}`};
  }
`;

type Props = {
  label: string;
  checked: boolean;
  value?: string;
  name?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
};

const Checkbox = ({ label, checked, value, name, onChange }: Props) => {
  return (
    <CheckboxContainer>
      <StyledInput
        id={`checkbox_${toId(label)}`}
        type="checkbox"
        checked={checked}
        name={name}
        value={value}
        onChange={onChange}
      />
      <Label htmlFor={`input_${toId(label)}`}>{label}</Label>
    </CheckboxContainer>
  );
};

export { Checkbox };
