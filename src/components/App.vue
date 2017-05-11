<template>
  <div id="app" class="container-fluid">
    <InitTracker />
  </div>
</template>

<script>
import InitTracker from './InitTracker'
// eslint-disable-next-line no-unused-vars
import styles from '../assets/scss/main.scss'
// eslint-disable-next-line no-unused-vars
import rpgAwesome from 'rpg-awesome/css/rpg-awesome.css'
// eslint-disable-next-line no-unused-vars
import customFontello from '../assets/fonts/fontello/css/fontello.css'

export default {
  name: 'app',
  components: {
    InitTracker,
  },
}
</script>
