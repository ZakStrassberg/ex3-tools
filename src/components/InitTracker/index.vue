<template lang="pug">
section
  h2.row.col.my-3 Turn {{ turn }} - Active: {{ currentCombatant ? currentCombatant.name : 'None' }}
  transition-group(name='combatant-item', tag='ul')
    Combatant.my-3(
      v-for='(each, index) in combatants',
      :active='each.name == currentCombatant.name',
      :combatant.sync='each',
      :key='each.key',
      @remove='removeCombatant(index)',
      @dragleave.stop.prevent=""

      @drop="newcomponentdrop"

      draggable="true"
    )
  aside.row.col.actions.my-3
    button(@click='sortCombatants') Sort combatants
    button(@click='nextTurn') Next turn
  AddCombatant.row.col.my-3(@addCombatant='addCombatant')
  p.my-0 ToDo:
  ul.ml-3
    li Spacing of combatant row items (lower bar)
    li Add confirmation state for delete combatant
    li Spruce up Add Combatant
    li Rethink 'Actions' (sort, new turn)
    li better health levels
    li keyboard shortcuts
      ul
        li Hover + up/down to move scores
    li More battle logic?
      ul
        li Drag to attack? (increases onslaught, pops up modal with stats, does init + crash)
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
        defenses: {
          parry: 0,
          evasion: 0,
        },
        onslaught: 0,
        health: [[0], [0, 0], [0, 0], [0], [0]],
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
        defenses: {
          parry: 0,
          evasion: 0,
        },
        onslaught: 0,
        health: [[0], [0, 0], [0, 0], [0], [0]],
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
    drop (e) {
      console.log('Looks like you dropped something!')
    },
    newdragover (e) {
      console.log('newdragover')
      console.log(e)
    },
    newdragenter (e) {
      console.log('newdragenter')
      console.log(e)
    },
    newcomponentdrop (e) {
      console.log('newcomponentdrop')
      console.log(e)
    },
    dragend (e) {
      console.log('dragend')
      console.log(e)
    },
    dragnewcompont (e) {
      console.log('dragnewcompont')
      console.log(e)
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
