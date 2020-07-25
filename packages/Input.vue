<template>
  <div class="dyw-input" :class="{'dyw-input--suffix': this.clearable || this.showPassword}">
    <input
      class="dyw-input__inner"
      :class="{'is-disabled':disabled}"
      :placeholder="placeholder"
      :type="showPassword ? (passwordControl ? 'text' : 'password') : type"
      :disabled="disabled"
      :name="name"
      :value="value"
      @input="handleInput"
    />
    <span class="dyw-input__suffix" v-if="this.clearable || this.showPassword">
      <i class="dyw-input__icon dyw-icon-circle-close" v-if="clearable && value" @click="clear"></i>
      <i class="dyw-input__icon dyw-icon-view" v-if="showPassword && value" @click="toggle"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'DywInput',
  data() {
    return {
      passwordControl: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    value: [String, Number],
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    clear() {
      this.$emit('input', '')
    },
    toggle() {
      this.passwordControl = !this.passwordControl
    }
  }
}
</script>

<style lang="scss" scoped>
.dyw-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .dyw-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.dyw-input--suffix {
  .dyw-input__inner {
    padding-right: 30px;
  }
  .dyw-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
