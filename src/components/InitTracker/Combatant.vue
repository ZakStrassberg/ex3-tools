<template lang="html">
  <li :class="['combatant', {turnOver: combatant.turnOver}]">
    <article>
      <input class="turnOver" type="checkbox" v-model="combatant.turnOver" />
      <input class="name" type="text" v-model.lazy="combatant.name" />
      <input class="init" type="text" v-model.number.lazy="combatant.init" />
      <input type="button" value="X" @click="removeCombatant">
    </article>
    <aside class="details">
      <ul>
        <li>Def</li>
        <li>Onslaught</li>
        <li>?</li>
        <li>HLs</li>
      </ul>
      <textarea v-model="combatant.notes" name="notes" placeholder="Notes..." />
    </aside>
  </li>
</template>

<script>
export default {
  name: 'Combatant',
  props: ['combatant'],
  methods: {
    removeCombatant () {
      this.$emit('remove')
    }
  }
}
</script>

<style lang="scss">
.combatant {
  display: block;
  padding: 12px;
  margin: 12px 0;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid black;
  &.turnOver {
    background: grey;
  }
  article {
    display: block;
    width: 100%;
    > * {
      display: inline-flex;
    }
    input[type="text"] {
      appearance: none;
      border: none;
      outline: none;
      border-bottom: 1px solid green;
      margin: 2px 6px;
      background: inherit;
      color: inherit;
    }
  }
  aside {
    display: block;
    ul {
      display: inline-flex;
      width: 100%;
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        flex: auto;
      }
    }
    textarea {
      appearance: none;
      border: none;
      outline: none;
      box-sizing: border-box;
      display: block;
      width: 100%;
      border-bottom: 1px solid green;
      border-radius: 2px;
      background: #eee;
    }
  }
}
</style>
