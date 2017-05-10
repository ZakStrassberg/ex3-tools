<template lang="html">
  <li :class="['combatant', {turnOver: combatant.turnOver}]">
    <article class="row">
      <div class="col name-turnOver">
        <input class="turnOver" type="checkbox" v-model="combatant.turnOver" />
        <input class="name" type="text" v-model.lazy="combatant.name" />
      </div>
      <div class="col init">
        <input type="text" v-model.number.lazy="combatant.init" /> Initiative
      </div>
      <input class="col remove" type="button" value="X" @click="removeCombatant">
    </article>
    <ul class="row details">
      <li>Def</li>
      <li>Onslaught</li>
      <li>?</li>
      <li>HLs</li>
    </ul>
    <textarea class="row col" v-model="notes" name="notes" placeholder="Notes..." />
  </li>
</template>

<script>
export default {
  name: 'Combatant',
  props: ['combatant'],
  data: () => ({
    notes: '',
    defense: { parry: 0, evasion: 0 },
    onslaught: 0,
    health: [1, 2, 2, 1, 1],
  }),
  methods: {
    removeCombatant () {
      this.$emit('remove')
    },
  },
}
</script>

<style lang="scss">
.combatant {
  background: white;
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
    display: inline-flex;
    width: 100%;
    > * {
      flex: 1;
      display: inline-flex;
      justify-content: center;
      align-items: center;
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

    .name-turnOver {
      flex: 1 0;
      input.name {
        width: 100%;
        font-size: 140%;
      }
    }
    .init {
      flex: 0;
      input {
        text-align: center;
        display: inline-flex;
        width: 50px;
        flex: 0;
      }
    }
    .remove {
      flex: 0 1;
    }

  }

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
    margin: 0;
  }

}
</style>
