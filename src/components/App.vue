<template>
<div id="app" class="container">
  <InitTracker id="init-tracker" />
</div>
</template>

<script>
// TODO: Note about Firebase 100 concurrent connections

import InitTracker from './InitTracker'

export default {
  name: 'app',
  components: {
    InitTracker,
  },
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss'
</style>
