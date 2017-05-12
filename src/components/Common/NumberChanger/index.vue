<template>
  <span class="number-changer">
    <i class="icon-up-circle" @click="increment" />
    <i class="icon-down-circle" @click="decrement" />
  </span>
</template>
<script>
export default {
  name: 'NumberChanger',
  methods: {
    increment () {
      this.$emit('increment')
    },
    decrement () {
      this.$emit('decrement')
    },
  },
}
</script>
<style lang="scss">
.number-changer {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-size: 10px;
  i:before {
    cursor: pointer;
  }
  .icon-up-circle, .icon-down-circle {
    &:hover {
      color: grey;
    }
  }
}
</style>
