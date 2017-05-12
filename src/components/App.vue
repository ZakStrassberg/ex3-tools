<template>
  <div id="app" class="container">
    <InitTracker id="init-tracker" />
  </div>
</template>

<script>
// TODO: Note about Firebase 100 concurrent connections

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
