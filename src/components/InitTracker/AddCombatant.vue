<template>
  <div class="AddCombatant">
    <input type="text" name="name" placeholder="Harmonious Jade" v-model="combatant.name" />
    <input type="text" name="init" placeholder="3" v-model="combatant.init">
    <input type="button" value="Add Combatant" @click="addCombatant" />
  </div>
</template>
<script>
const blankCombatant = {
  name: '',
  init: 3,
  turnOver: false,
  key: Date.now(),
  notes: '',
  defenses: {
    parry: 0,
    evasion: 0,
  },
  onslaught: 0,
  health: [[0], [0, 0], [0, 0], [0], [0]],
  motes: {
    personal: {
      total: 0,
      available: 0,
    },
    peripheral: {
      total: 0,
      available: 0,
    },
  },
}

export default {
  name: 'AddCombatant',
  data: () => ({
    combatant: blankCombatant,
  }),
  methods: {
    addCombatant () {
      this.$emit('addCombatant', this.combatant)
      this.combatant = blankCombatant
    },
  },
}
</script>
<style>
</style>
