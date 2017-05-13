<template>
<section class="health-track">
  <i class="ra ra-health" />
  <span v-for="(value, index) in health">
      {{ healthLevelTitle(index) }}
      <input type="checkbox" v-for="each in value">
    </span>
</section>
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
  },
}
</script>

<style lang="scss" scoped>
.health-track {
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
    white-space: nowrap;
}
</style>
