import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import 'firebase/auth';

import { Button } from 'components/core/Button';
import { Checkbox } from 'components/core/Checkbox';
import { Input } from 'components/core/Input';
import { Link } from 'components/core/Link';
import { useField } from 'hooks/useField';
import { validateEmail } from 'validations/validateEmail';
import { ROUTES } from 'consts/routes';
import { Form } from 'components/core/Form';
import { useUserState, useUserDispatch, loginUser } from 'contexts/user';
import { validatePassword } from 'validations/validatePassword';

const H2 = styled.h2`
  margin-top: 0;
  text-align: center;
  font-weight: bold;
`;

const ErrorMessage = styled.p`
  margin-top: 32px;
  color: ${props => props.theme.colors.error};
`;

const RegisterContainer = styled.p`
  margin-top: 20px;

  > a {
    margin-left: 5px;
  }
`;

const LoginForm = () => {
  const email = useField(validateEmail);
  const password = useField(validatePassword);

  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);

  const { isLoading, errorMessage } = useUserState();
  const dispatch = useUserDispatch();

  const handleOnRemeberMeChange = () => {
    setIsRememberMeChecked(!isRememberMeChecked);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { isValid: isValidEmail } = email.handleSubmit();
    const { isValid: isPasswordValid } = password.handleSubmit();

    if (isValidEmail && isPasswordValid) {
      loginUser(dispatch, email.value, password.value);
    }
  };

  return (
    <Form noValidate onSubmit={handleFormSubmit}>
      <H2>Login</H2>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Input
        label="Email"
        type="email"
        placeholder="joe@doe.com"
        value={email.value}
        autocomplete="email"
        errorMessage={email.error}
        required
        fullWidth
        onChange={email.handleChange}
        onBlur={email.handleBlur}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password.value}
        autocomplete="current-password"
        errorMessage={password.error}
        required
        fullWidth
        onChange={password.handleChange}
        onBlur={password.handleBlur}
      />
      <Checkbox
        label="Remember me"
        checked={isRememberMeChecked}
        onChange={handleOnRemeberMeChange}
      />
      <Button type="submit" isLoading={isLoading}>
        Log in
      </Button>
      <RegisterContainer>
        Don't have an account?
        <Link href={ROUTES.register.path}>Register</Link>
      </RegisterContainer>
    </Form>
  );
};

export { LoginForm };
