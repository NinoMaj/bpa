import React, { FormEvent, useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';

import { Button } from 'components/core/Button';
import { Input } from 'components/core/Input';
import { Link } from 'components/core/Link';
import { useField } from 'hooks/useField';
import { validateEmail } from 'validations/validateEmail';
import { validatePassword } from 'validations/validatePassword';
import { ROUTES } from 'consts/routes';
import { validateRepeatPassword } from 'validations/validateRepeatPassword';
import { HttpMethod } from 'enums/HttpMethod';
import { fetchFromApi } from 'services/api';
import { Form } from 'components/core/Form';

const H2 = styled.h2`
  margin-top: 0;
  text-align: center;
  font-weight: bold;
`;

const LoginContainer = styled.p`
  margin-top: 20px;

  > a {
    margin-left: 5px;
  }
`;

const RegisterForm = () => {
  const email = useField(validateEmail);
  const password = useField(validatePassword);
  const repeatPassword = useField(validateRepeatPassword(password.value));
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { isValid: isValidEmail } = email.handleSubmit();
    const { isValid: isPasswordValid } = password.handleSubmit();
    const { isValid: isRepeatPasswordValid } = repeatPassword.handleSubmit();
    if (isValidEmail && isPasswordValid && isRepeatPasswordValid) {
      setIsFormSubmitting(true);
      try {
        const response = await fetchFromApi({
          url: '/users/register',
          method: HttpMethod.Post,
          body: { email: email.value, password: password.value },
        });
        if (response.ok) {
          Router.push('/login');
        } else {
          alert(response.statusText);
        }
      } catch (e) {
        alert(e);
      } finally {
        setIsFormSubmitting(false);
      }
    }
  };

  return (
    <Form noValidate onSubmit={handleFormSubmit}>
      <H2>Registration</H2>
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
        placeholder="Make it looong..."
        value={password.value}
        autocomplete="new-password"
        errorMessage={password.error}
        required
        fullWidth
        onChange={password.handleChange}
        onBlur={password.handleBlur}
      />
      <Input
        label="Repeat password"
        type="password"
        placeholder="Match above password"
        value={repeatPassword.value}
        autocomplete="new-password"
        errorMessage={repeatPassword.error}
        required
        fullWidth
        onChange={repeatPassword.handleChange}
        onBlur={repeatPassword.handleBlur}
      />
      <Button type="submit" isLoading={isFormSubmitting}>
        Register
      </Button>
      <LoginContainer>
        Already have an account?
        <Link href={ROUTES.login.path}>Go to login</Link>
      </LoginContainer>
    </Form>
  );
};

export { RegisterForm };
