import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import { Checkbox } from './Checkbox';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('unchecked', () => {
    return (
      <Checkbox label="Checkcox" checked={boolean(false)} onChange={() => {}} />
    );
  })
  .add('checked', () => {
    return (
      <Checkbox label="Checkcox" checked={boolean(true)} onChange={() => {}} />
    );
  });
