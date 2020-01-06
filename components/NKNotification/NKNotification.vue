<template>
  <div class="alert">
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
    }
  }

}
</script>

<style>
.alert {
  background-color: lightgray;
  margin: 10px;
  padding: 20px;
  font-size: 20px;
  color: black;
}
</style>
