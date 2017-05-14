<template lang="pug">
  section
    div.health-track
      i.ra.ra-health.mx-2(@click="edit = !edit" :class="{ edit }")
      span.mr-1(v-for='(level, index) in health')
        section(v-if="!edit")
          span.mr-1 {{ healthLevelTitle(index) }}
          span.mr-1(v-for='(each, eindex) in level', @click="toggleHealth(index, eindex, each)")
            i.health-level(:class="`icon-${getDamageTypeFromEnum(each)}`")
        section(v-else)
          span.mr-1 {{ healthLevelTitle(index) }}
          input.ra-fw(type="text" :value="health[index].length" :name="index" @change="changeHealthLevelNumber")
</template>

<script>
export default {
  name: 'HealthTrack',
  props: ['health'],
  data: () => ({
    edit: false,
  }),
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
    changeHealthLevelNumber ({ target: { value, name }}) {
      const index = name
      console.log(this.health[index])
      while (this.health[index].length < value) {
        this.health[index].push(0)
      }
      this.health[index].splice(value)
    },
    log (...vars) {
      console.log(vars)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/_colors.scss';

.health-track {
    display: inherit;
    justify-content: inherit;
    align-items: baseline;
    white-space: nowrap;
}
.health-level {
  display: inline-block;
  border: 1px solid black;
  width: 24px;
  height: 24px;
  -webkit-font-smoothing: antialiased;
  &.icon-damage-none:before {
    content: " ";
  }
}

.ra.ra-health {
  &.edit,
  &:hover {
      box-sizing: border-box;
      border-radius: 8px;
      background: $dark-gold;
      padding: 0.25rem;
      margin: -0.25rem 0.25rem !important;
  }
  &:hover {
      cursor: pointer;
  }
}

.ra-fw {
    text-align: center;
    width: 1.4rem;
}
</style>
