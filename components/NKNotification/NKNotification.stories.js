import { storiesOf } from '@storybook/vue'
import NKNotification from './NKNotification'

storiesOf('NKNotification', module)
  .add('normal', () => ({
    components: { NKNotification },
    template: `
      <NKNotification
        :msg="msg"
      />
    `,
    data: () => ({
      msg: "This is a notification."
    })
  }))
