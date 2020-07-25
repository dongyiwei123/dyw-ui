<template>
  <div id="app">
    <dywForm :model="model" label-width="80px">
      <dywFormItem label="用户名">
        <dywInput placeholder="请输入用户名" v-model="model.username"></dywInput>
      </dywFormItem>
      <dywFormItem label="选择">
        <dywSwitch v-model="model.active"></dywSwitch>
      </dywFormItem>
    </dywForm>
  </div>
</template>

<script>
// import Demo from './demo/demo'
export default {
  data() {
    return {
      model: {
        username: '',
        active: true
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  .dyw-input {
    width: 180px;
  }
}
</style>
