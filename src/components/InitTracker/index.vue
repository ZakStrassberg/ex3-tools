<template lang="pug">
section
	h2.row.col.my-3 Turn {{ turn }} - Active: {{ currentCombatant ? currentCombatant.name : 'None' }}
	transition-group(name='combatant-item', tag='ul')
		Combatant.my-3(:active='each.name == currentCombatant.name', v-for='(each, index) in combatants', :key='each.key', :combatant.sync='each', @remove='removeCombatant(index)')
	aside.row.col.actions.my-3
		button(@click='sortCombatants') Sort combatants
		button(@click='nextTurn') Next turn
	AddCombatant.row.col.my-3(@addcombatant='addCombatant')
</template>

<script>
import { sortBy, find } from 'lodash'
import Combatant from './Combatant/'
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
        notes: '',
        defense: {
          parry: 0,
          evasion: 0,
        },
        onslaught: 0,
        health: [1, 2, 2, 1, 1],
        motes: {
          personal: {
            total: 11,
            available: 9,
          },
          peripheral: {
            total: 35,
            available: 17,
          },
        },
      },
      {
        name: 'Peleps Deled',
        init: 7,
        turnOver: false,
        key: 'unique2',
        notes: '',
        defense: {
          parry: 0,
          evasion: 0,
        },
        onslaught: 0,
        health: [1, 2, 2, 1, 1],
        motes: {
          personal: {
            total: 11,
            available: 9,
          },
          peripheral: {
            total: 35,
            available: 17,
          },
        },
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
    sortCombatants () {
      this.combatants = sortBy(this.combatants, ['init']).reverse()
    },
    nextTurn () {
      this.turn++
      for (const each of this.combatants) {
        each.turnOver = false
        // regen motes
        const { peripheral, personal } = each.motes
        console.log(peripheral, personal)
        console.log(peripheral.available, peripheral.total)
        // if(each.motes.peripheral.available < )
      }
      this.sortCombatants()
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
