<template>
  <button
    class="dyw-button"
    :class="[`dyw-button--${type}`, { 'is-plain': plain }, { 'is-round': round }, { 'is-circle': circle }, { 'is-disabled': disabled }]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <i :class="icon" v-if="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'DywButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.dyw-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0 10px;
  transition: 0.1s;
  font-weight: 500;
  // 禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.dyw-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.dyw-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.dyw-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.dyw-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.dyw-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}

// 朴素的按钮
.dyw-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.dyw-button--primary.is-plain {
  color: #a2a8ad;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.dyw-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}

.dyw-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.dyw-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.dyw-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

.dyw-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

// 原形按钮
.dyw-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// 禁止按钮
.dyw-button.is-disabled,
.dyw-button.is-disabled:focus,
.dyw-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.dyw-button.is-disabled,
.dyw-button.is-disabled:focus,
.dyw-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.dyw-button--primary.is-disabled,
.dyw-button--primary.is-disabled:active,
.dyw-button--primary.is-disabled:focus,
.dyw-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.dyw-button--success.is-disabled,
.dyw-button--success.is-disabled:active,
.dyw-button--success.is-disabled:focus,
.dyw-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}
.dyw-button--info.is-disabled,
.dyw-button--info.is-disabled:active,
.dyw-button--info.is-disabled:focus,
.dyw-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
.dyw-button--warning.is-disabled,
.dyw-button--warning.is-disabled:active,
.dyw-button--warning.is-disabled:focus,
.dyw-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.dyw-button--danger.is-disabled,
.dyw-button--danger.is-disabled:active,
.dyw-button--danger.is-disabled:focus,
.dyw-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}

.dyw-button [class*='dyw-icon-'] + span {
  margin-left: 5px;
}
</style>
