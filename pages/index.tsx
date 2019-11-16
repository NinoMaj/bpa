import React from 'react';

import { App } from 'components/App';
import { ROUTES } from 'consts/routes';
import { ExternalLink } from 'components/core/ExternalLink';

export default () => {
  return (
    <App title={ROUTES.homepage.name}>
      <h2>{ROUTES.homepage.name}</h2>
      Created with{' '}
      <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>
    </App>
  );
};
