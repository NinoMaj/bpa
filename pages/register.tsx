import React from 'react';

import { App } from 'components/App';
import { RegisterForm } from 'components/user/RegisterForm/RegisterForm';
import { ROUTES } from 'consts/routes';

export default () => {
  return (
    <App title={ROUTES.register.name} center>
      <RegisterForm />
    </App>
  );
};
