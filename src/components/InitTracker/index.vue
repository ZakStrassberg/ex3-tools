<template lang="pug">
section
	h2.row.col Turn {{ turn }} - Active: {{ currentCombatant ? currentCombatant.name : 'None' }}
	transition-group(name='combatant-item', tag='ul')
		combatant(:class='{ active : each.name == currentCombatant.name }', v-for='(each, index) in sortedCombatants', :key='each.key', :combatant.sync='each', @remove='removeCombatant(index)')
	aside.row.col.actions
		button(@click='nextTurn') Next turn
	AddCombatant.row.col(@addcombatant='addCombatant')
</template>

<script>
import { sortBy, find } from 'lodash'
import Combatant from './Combatant'
import AddCombatant from './AddCombatant'

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
      return (
        find(this.sortedCombatants, {
          turnOver: false,
        }) || false
      )
    },
  },
  methods: {
    nextTurn () {
      this.turn++
      for (const each of this.combatants) {
        each.turnOver = false
      }
    },
    addCombatant (combatant) {
      this.combatants.push(combatant)
    },
    removeCombatant (index) {
      this.combatants.splice(index, 1)
    },
  },
  components: {
    Combatant,
    AddCombatant,
  },
}
</script>

<style lang="scss" scoped>
#init-tracker {
    .combatant-item-move {
        transition: transform 1s;
    }

    > ul {
        margin: 0;
        padding: 0;
    }
}
</style>
