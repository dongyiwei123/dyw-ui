<template>
  <div class="dyw-radioGroup">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DywRadioGroup',
  provide() {
    return {
      radioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>

<style>
</style>
