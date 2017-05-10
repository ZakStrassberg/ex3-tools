<template>
  <div id="app" class="container-fluid">
    <InitTracker />
  </div>
</template>

<script>
import InitTracker from './InitTracker'
// eslint-disable-next-line no-unused-vars
import styles from '../assets/scss/main.scss'

export default {
  name: 'app',
  components: {
    InitTracker,
  },
}
</script>
