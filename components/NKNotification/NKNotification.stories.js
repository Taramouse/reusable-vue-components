import { storiesOf } from '@storybook/vue'
import NKNotification from './NKNotification'

storiesOf('NKNotification', module)
  .add('default', () => ({
    components: { NKNotification },
    template: `
      <NKNotification
        :msg="msg"
        :alertType="alertType"
        :show="show"
      />
    `,
    data: () => ({
      msg: "This is an default notification.",
      alertType: "nk-default",
      show: true
    })
  }))
  .add('success', () => ({
    components: { NKNotification },
    template: `
      <NKNotification
        :msg="msg"
        :alertType="alertType"
        :show="show"
      />
    `,
    data: () => ({
      msg: "This is an success notification.",
      alertType: "nk-success",
      show: true
    })
  }))
  .add('warning', () => ({
    components: { NKNotification },
    template: `
      <NKNotification
        :msg="msg"
        :alertType="alertType"
        :show="show"
      />
    `,
    data: () => ({
      msg: "This is an warning notification.",
      alertType: "nk-warning",
      show: true
    })
  }))
  .add('error', () => ({
    components: { NKNotification },
    template: `
      <NKNotification
        :msg="msg"
        :alertType="alertType"
        :show="show"
      />
    `,
    data: () => ({
      msg: "This is an error notification.",
      alertType: "nk-error",
      show: true
    })
  }))
