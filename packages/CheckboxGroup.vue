<template>
  <div class="dyw-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'dywCheckboxGroup',
  props: {
    value: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  provide() {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>
</style>
