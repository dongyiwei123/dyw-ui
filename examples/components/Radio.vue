<template>
  <label class="dyw-radio" :class="{'is-checked':label===model}">
    <span class="dyw-radio__input">
      <span class="dyw-radio__inner"></span>
      <input class="dyw-radio__original" type="radio" :value="label" :name="name" v-model="model" />
    </span>
    <span class="dyw-radio__label">
      <slot></slot>
      <span v-if="!$slots.default">{{label}}</span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'dywRadio',
  inject: {
    radioGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      get() {
        return this.isRadioGroup ? this.radioGroup.value : this.value
      },
      set(value) {
        return this.isRadioGroup ? this.radioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isRadioGroup() {
      return !!this.radioGroup
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.dyw-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .dyw-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .dyw-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .dyw-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .dyw-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.dyw-radio.is-checked {
  .dyw-radio__input {
    .dyw-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .dyw-radio__label {
    color: #409eff;
  }
}
</style>
