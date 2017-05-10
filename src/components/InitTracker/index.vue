<template>
<section id="init-tracker">
  <h2>Turn {{ turn }} - Active: {{ currentCombatant ? currentCombatant.name : 'None' }}</h2>
  <transition-group name="combatant-item" tag="ul">
    <Combatant v-for="(each, index) in sortedCombatants" :key="each.key" :combatant.sync="each" @remove="removeCombatant(index)" />
  </transition-group>
  <aside class="actions">
    <button @click="nextTurn">Next turn</button>
  </aside>
</section>
</template>

<script>
import { sortBy, find } from 'lodash'
import Combatant from './Combatant'

export default {
  name: 'InitTracker',
  data: () => ({
    combatants: [
      {
        name: 'Harmonious Jade',
        init: 12,
        turnOver: false,
        key: 'unique1',
      },
      {
        name: 'Peleps Deled',
        init: 7,
        turnOver: false,
        key: 'unique2',
      },
    ],
    turn: 0,
  }),
  computed: {
    sortedCombatants () {
      return sortBy(this.combatants, ['init']).reverse()
    },
    currentCombatant () {
      return find(this.sortedCombatants, {
        turnOver: false,
      })
    },
  },
  methods: {
    nextTurn () {
      this.turn++
      for (const each of this.combatants) {
        each.turnOver = false
      }
    },
    removeCombatant (index) {
      this.combatants.splice(index, 1)
    },
  },
  components: {
    Combatant,
  },
}
</script>

<style lang="scss">
#init-tracker {
  width: 800px;
  margin: 0 auto;

  .combatant-item-move {
    transition: transform 1s;
  }
}
</style>
