<template>
  <div v-if="show"
       class="nk-alert"
       :class="computedClass"
       :alertType="alertType"
       :show="show">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'NKNotification',
  props: {
    msg: {
      default: "Blank Notification",
      type: String,
      required: true
    },
    alertType: {
      default: "nk-dafault",
      type: String
    },
    show: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    computedClass () {
      let className = this.alertType
      return className
    }
  }
}
</script>

<style>
.nk-alert {
  padding: 20px;
  font-size: 20px;
}
.nk-default {
  background-color: lightgray;
  color: black;
}
.nk-success {
  background-color: hsl(120, 57%, 80%);
  color: hsl(120, 57%, 20%);
}
.nk-warning {
  background-color: hsl(36, 65%, 60%);
  color: hsl(36, 65%, 20%);
}
.nk-error {
  background-color: hsl(0, 80%, 80%);
  color: hsl(0, 80%, 20%);
}
</style>
