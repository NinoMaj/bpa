import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';

storiesOf('Button', module)
  .add('primary', () => {
    return <Button onClick={action('clicked')}>Button</Button>;
  })
  .add('secondary', () => {
    return (
      <Button onClick={action('clicked')} secondary>
        Button
      </Button>
    );
  })
  .add('disabled', () => {
    return (
      <Button onClick={action('clicked')} disabled>
        Button
      </Button>
    );
  })
  .add('isLoading', () => {
    return (
      <Button onClick={action('clicked')} isLoading>
        Button
      </Button>
    );
  })
  .add('fullWidth', () => {
    return (
      <Button onClick={action('clicked')} fullWidth>
        Button
      </Button>
    );
  });
