import React from 'react';

import { App } from 'components/App';
import { LoginForm } from 'components/user/LoginForm/LoginForm';
import { ROUTES } from 'consts/routes';

export default () => {
  return (
    <App title={ROUTES.login.name} center>
      <LoginForm />
    </App>
  );
};
