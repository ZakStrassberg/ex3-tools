<template lang="pug">
  section
    div.health-track
      i.ra.ra-health.mr-2
      span.mr-1(v-for='(level, index) in health')
        span.mr-1 {{ healthLevelTitle(index) }}
        span.mr-1(v-for='(each, eindex) in level', @click="toggleHealth(index, eindex, each)")
          i.health-level( :class="`icon-${getDamageTypeFromEnum(each)}`")
</template>

<script>
export default {
  name: 'HealthTrack',
  props: ['health'],
  methods: {
    healthLevelTitle (index) {
      switch (index) {
        case 0:
          return 0
        case 1:
          return -1
        case 2:
          return -2
        case 3:
          return -4
        case 4:
          return 'I'
      }
    },
    getDamageTypeFromEnum (enumeration) {
      switch (enumeration) {
        case 0:
          return 'damage-none'
        case 1:
          return 'damage-bashing'
        case 2:
          return 'damage-lethal'
        case 3:
          return 'damage-agg'
      }
    },
    toggleHealth (index, eindex, value) {
      // console.log(this.health[index][eindex], value)
      this.health[index][eindex] = value < 4 ? value++ : 0
      this.$set(this.health[index], eindex, value < 4 ? value++ : 0)
      // console.log(this.health[index][eindex])
      // this.$emit('update:health', value++)
    },
    log (...vars) {
      console.log(vars)
    },
  },
}
</script>

<style lang="scss" scoped>
.health-track {
    display: inherit;
    justify-content: inherit;
    align-items: baseline;
    white-space: nowrap;
}
.health-level {
  display: inline-block;
  border: 1px solid black;
  width: 16px;
  height: 16px;
}
</style>
