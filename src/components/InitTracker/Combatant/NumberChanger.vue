<template>
<span class="number-changer">
    <i class="icon-up-circle" @click="increment" />
    <slot>
    </slot>
    <i class="icon-down-circle" @click="decrement" />
  </span>
</template>

<script>
// change to have a slot that inserts number changer around the slot
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

<style lang="scss" scoped>
.number-changer {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    i:before {
        cursor: pointer;
    }
    & .icon-down-circle,
    .icon-up-circle {
        &:hover {
            color: grey;
        }
    }
}
</style>
