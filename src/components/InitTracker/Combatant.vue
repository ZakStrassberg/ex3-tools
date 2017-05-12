<template lang="html">
  <li :class="['combatant', {turnOver: combatant.turnOver}]">
    <article class="row no-gutters">
      <div class="col name-turnOver">
        <i class="ra ra-hourglass turnOver button" @click="combatant.turnOver = !combatant.turnOver" />
        <input class="name" type="text" v-model.lazy="combatant.name" />
      </div>
      <div class="col init px-3">
        <input type="text" v-model.number.lazy="combatant.init" />
        <NumberChanger @increment="combatant.init++" @decrement="combatant.init--" />
        Initiative
      </div>
      <div class="col remove">
        <i class="ra ra-tombstone button" @click="removeCombatant" />
      </div>
    </article>
    <ul class="row details pt-3">
      <li>
        <i class="ra ra-fw ra-sword"></i> {{ defense.parry }}
        <i class="ra ra-fw ra-player-dodge" /> {{ defense.evasion }}
      </li>
      <li>
        <i class="ra ra-fw ra-cracked-shield" /> {{ onslaught }} <NumberChanger @increment="onslaught++" @decrement="onslaught--" />
      </li>
      <li class="motes">
        <i class="ra ra-fw ra-circular-saw" />
        <input type="text" :value="moteDisplay.personal" @change="updateMotes" />
        <i class="ra ra-fw  ra-circular-shield" />
        <input type="text" :value="moteDisplay.peripheral" />
      </li>
      <HealthTrack :health="health" />
    </ul>
    <textarea class="row col mt-3" v-model="notes" name="notes" placeholder="Notes..." />
  </li>
</template>

<script>
import HealthTrack from './HealthTrack'
import NumberChanger from '../Common/NumberChanger'

export default {
  name: 'Combatant',
  props: ['combatant'],
  components: {
    HealthTrack,
    NumberChanger,
  },
  data: () => ({
    notes: '',
    defense: { parry: 0, evasion: 0 },
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
  }),
  methods: {
    removeCombatant () {
      this.$emit('remove')
    },
    updateMotes (e) {
      console.log(e.target.value)
      this.motes['personal'].available = e.target.value
    },
  },
  computed: {
    moteDisplay () {
      return {
        personal: `${this.motes.personal.available}/${this.motes.personal.total}`,
        peripheral: `${this.motes.peripheral.available}/${this.motes.peripheral.total}`,
      }
    },
  },
}
</script>

<style lang="scss">
.combatant {
  background: lighten(gold, 40%);
  display: block;
  padding: 12px;
  margin: 12px 0;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid black;

  &.turnOver {
    background: #ccc;
    i.turnOver {
      color: grey;
      border-color: grey;
      &:hover {
        color: gold;
      }
    }
  }
  i.turnOver {
    border-color: gold;
    color: gold;
    &:hover {
      color: grey;
      border-color: grey;
    }
  }

  input[type="text"] {
    appearance: none;
    border: none;
    outline: none;
    border-bottom: 1px solid gold;
    margin: 2px 6px;
    background: inherit;
    color: inherit;
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
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex: auto;
      &.motes {
        input {
          flex: 0 1 50px;
          width: 50px;
          text-align: center;
        }
      }
    }
  }

  textarea {
    background: lighten(gold, 45%);
    appearance: none;
    border: none;
    outline: none;
    box-sizing: border-box;
    display: block;
    width: 100%;
    border-bottom: 1px solid gold;
    border-radius: 2px;
    margin: 0;
  }

  .button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 4px solid;
    padding: 6px;
    font-size: 120%;
    border-radius: 50%;
    transition: 0.4s;
  }

}
</style>
