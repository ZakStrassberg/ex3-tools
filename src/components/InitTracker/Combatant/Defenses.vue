<template lang="pug">
section.defenses
  ContextMenu(:items="menu.parry")
    section.parry.mx-2(
      v-tooltip="'Base Parry: ' + defenses.parry",
      @click="edit.parry = !edit.parry",
      v-bind:class="{ edit: edit.parry}",
    )
      i.ra.ra-fw.ra-sword.px-1
      span.ra-fw(v-if="!edit.parry") {{ defenses.parry - onslaught }}
      input.ra-fw(v-else, v-model="defenses.parry", type="text")
  section.evasion.mx-2(v-tooltip="'Base Evasion: ' + defenses.evasion" @click="edit.evasion = !edit.evasion" v-bind:class="{ edit: edit.evasion}")
    i.ra.ra-fw.ra-player-dodge.px-1
    span.ra-fw(v-if="!edit.evasion") {{ defenses.evasion - onslaught }}
    input.ra-fw(v-else, v-model="defenses.evasion", type="text" @click.stop="" @change="edit.evasion = false")
</template>
<script>
import ContextMenu from 'vue2-context-menu'

export default {
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
</style>
