<template>
  <div class="dyw-switch" :class="{'is-checked':value}" @click="showSwitch">
    <template>
      <div class="dyw-switch">
        <span class="dyw-switch__core" ref="core">
          <span class="dyw-switch__button"></span>
        </span>
        <input class="dyw-switch__input" type="checkbox" :name="name" ref="input" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'dywSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: '#409eff'
    },
    inactiveColor: {
      type: String,
      default: '#dcdfe6'
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async showSwitch() {
      this.$emit('input', !this.value)
      await this.$nextTick()
      this.setColor()
      this.$emit('click')
    },
    setColor() {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
        this.$refs.input.value = this.value
      }
    }
  },
  mounted() {
    this.setColor()
  }
}
</script>

<style lang="scss">
.dyw-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .dyw-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .dyw-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .dyw-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.dyw-switch.is-checked {
  .dyw-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .dyw-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
