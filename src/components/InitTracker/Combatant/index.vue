<template lang="pug">
li(:class="['combatant', {turnOver: combatant.turnOver}, { active }]")
  article.row.no-gutters
    .col.name-turnOver
      i.ra.ra-hourglass.turnOver.button.mr-3(@click='combatant.turnOver = !combatant.turnOver' v-tooltip="'Toggle turn'")
      input.name(type='text', v-model.lazy='combatant.name')
    .col.init.px-3
      //- span Initiative
      NumberChanger(@increment='combatant.init++', @decrement='combatant.init--', v-tooltip={ content: 'Initiative' })
        input(type='text', v-model.number.lazy='combatant.init', @keyup.up="combatant.init++", @keyup.down="combatant.init--")
    .col.remove
      i.ra.ra-tombstone.button(@click='removeCombatant' v-tooltip="'Remove combatant'")
  ul.row.details.no-gutters.pt-3
    li.col
      Defenses(:defenses.sync="combatant.defenses" :onslaught="combatant.onslaught")
    li.col
      section.onslaught(v-tooltip={ content: 'Onslaught' })
        i.ra.ra-fw.ra-cracked-shield(@click="combatant.onslaught = 0")
        NumberChanger(@increment='combatant.onslaught++', @decrement='combatant.onslaught > 0 && combatant.onslaught--', min='0')
          input.ra-fw(v-model="combatant.onslaught" type="text" @keyup.up="combatant.onslaught++", @keyup.down="combatant.onslaught > 0 && combatant.onslaught--")
    li.col
      MoteDisplay(:motes.sync="combatant.motes")
    li.col
      HealthTrack(:health='combatant.health' v-tooltip={ content: 'Health Levels' })
  textarea.row.col.mt-3(v-model='combatant.notes', name='notes', placeholder='Notes...')
</template>

<script>
import HealthTrack from './HealthTrack'
import NumberChanger from './NumberChanger'
import Defenses from './Defenses'
import MoteDisplay from './MoteDisplay'

export default {
  name: 'Combatant',
  props: ['combatant', 'active'],
  components: {
    HealthTrack,
    NumberChanger,
    Defenses,
    MoteDisplay,
  },
  // data: () => ({}),
  methods: {
    removeCombatant () {
      this.$emit('remove')
    },
  },
  watch: {
    active (val) {
      if (val) {
        this.combatant.onslaught = 0
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.combatant {
    background: lighten(gold, 40%);
    display: block;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
    transition: 0.4s;
    &.active {
        width: 110%;
        margin: 12px -5%;
        background: lighten(gold, 33%);
        border: 2px solid gold;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
    }
    .row {
        display: inline-flex;
        justify-content: space-between;
        align-items: flex-end;
        > * {
            display: inherit;
            flex: 0 1;
        }
    }
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
    article {
        display: inline-flex;
        width: 100%;
        .name-turnOver {
            flex: 1 0 !important;
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
            display: inherit;
            justify-content: inherit;
            align-items: inherit;
            > * {
                display: inherit;
                justify-content: inherit;
                align-items: inherit;
            }

        }
    }

    .onslaught .ra {
        cursor: pointer;
        transition: 0.4s;
        &:active {
            color: darken(gold, 30%);
            transition: 0s;
            opacity: 0.1;
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
        line-height: 1 !important;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: 4px solid;
        padding: 6px;
        font-size: 120%;
        border-radius: 50%;
        transition: 0.4s;
    }
    .ra {
        line-height: inherit;
    }
}
</style>
