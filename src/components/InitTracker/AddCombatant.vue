<template>
  <div id="AddCombatant">
    <input type="text" name="name" placeholder="Harmonious Jade" v-model="combatant.name" />
    <input type="text" name="init" placeholder="3" v-model="combatant.init">
    <input type="button" value="Add Combatant" @click="addCombatant" />
  </div>
</template>
<script>
export default {
  name: 'AddCombatant',
  data: () => ({
    combatant: {
      name: '',
      init: 3,
      turnOver: false,
      key: Date.now(),
    },
  }),
  methods: {
    addCombatant () {
      this.$emit('addCombatant', this.combatant)
      this.combatant = {
        name: '',
        init: 3,
        turnOver: false,
        key: Date.now(),
      }
    },
  },
}
</script>
<style>
</style>
