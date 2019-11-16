import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { ExternalLink } from './ExternalLink';

storiesOf('ExternalLink', module).add('basic', () => {
  return (
    <ExternalLink href="http://localhost:6006/?path=/story/externallink--basic">
      New storybook instance
    </ExternalLink>
  );
});
