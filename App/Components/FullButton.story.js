import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import FullButton from './FullButton'

storiesOf('FullButton')
  .add('Default', () => (
    <FullButton
      text='A simple button'
      onPress={action("FullButton pressed")}
    />
  ))
  .add('Custom Style', () => (
    <FullButton
      text='Style Me Up!'
      styles={{ backgroundColor: 'blue' }}
    />
  ))
