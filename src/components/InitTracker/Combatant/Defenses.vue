<template lang="pug">
section.defenses
  ContextMenu(:items="menu.parry")
    section.parry.mx-2(
      v-tooltip="'Base Parry: ' + defenses.parry || 0",
      @click="edit.parry = !edit.parry",
      v-bind:class="{ edit: edit.parry}",
    )
      i.ra.ra-fw.ra-sword.px-1
      span.ra-fw(v-if="!edit.parry") {{ defenses.parry - onslaught }}
      input.ra-fw(
        v-else,
        v-focus="edit.parry",
        @focus="prevParry = defenses.parry; defenses.parry = ''; edit.parry = true",
        @blur="edit.parry = false; defenses.parry == '' ? defenses.parry = prevParry : null",
        v-model.number="defenses.parry",
        type="text")
  section.evasion.mx-2(
    v-tooltip="'Base Evasion: ' + defenses.evasion",
    @click="edit.evasion = !edit.evasion",
    v-bind:class="{ edit: edit.evasion}",
    @keyup.up="defenses.evasion++",
    @keyup.down="defenses.evasion > 0 && defenses.evasion--",
  )
    i.ra.ra-fw.ra-player-dodge.px-1
    span.ra-fw(v-if="!edit.evasion") {{ defenses.evasion - onslaught }}
    input.ra-fw(
      v-else,
      v-focus="edit.evasion",
      @focus="prevEvasion = defenses.evasion; defenses.evasion = ''; edit.evasion = true",
      @blur="edit.evasion = false; defenses.evasion == '' ? defenses.evasion = 0 : null",
      v-model.number="defenses.evasion",
      type="text")
</template>
<script>
import { focus } from 'vue-focus'
import ContextMenu from 'vue2-context-menu'

export default {
  directives: { focus },
  name: 'Defenses',
  props: ['defenses', 'onslaught'],
  data: () => ({
    edit: {
      parry: false,
      evasion: false,
    },
    menu: {
      parry: [
        { name: 'test1', url: 'http://google.com' },
        { name: 'test2', url: 'http://google.com' },
        { name: 'test3', url: 'http://google.com' },
      ],
      evasion: [
        { name: 'test4', url: 'http://google.com' },
        { name: 'test5', url: 'http://google.com' },
        { name: 'test6', url: 'http://google.com' },
      ],
    },
    prevParry: 0,
    prevEvasion: 0,
  }),
  components: {
    ContextMenu,
  },
}
</script>
<style lang="scss" scoped>
@import '../../../assets/scss/colors';
.evasion,
.parry {
    &.edit,
    &:hover {
        box-sizing: border-box;
        border-radius: 8px;
        background: $dark-gold;
        padding: 0.25rem;
        margin: -0.25rem 0.25rem !important;
    }
    &:hover {
        cursor: pointer;
    }
}
.ra-fw {
    text-align: center;
    width: 1.4rem;
}
span.ra-fw {
    display: inline-block;
}
input.ra-fw {
  border-bottom: none;
}
</style>
<style lang="scss">
.ctx-menu-content {
  margin: 8px;
  position: fixed !important;
  z-index: 999;
}
</style>
