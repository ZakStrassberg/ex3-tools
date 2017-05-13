<template lang="pug">
section.defenses
	section.parry.mr-2(v-tooltip="'Base Parry: ' + defenses.parry")
		i.ra.ra-fw.ra-sword(@click="edit.parry = !edit.parry")
		span.fw(v-if="!edit.parry") {{ defenses.parry - onslaught }}
		input.fw(v-else, v-model="defenses.parry", type="text")
	section.evasion(v-tooltip="'Base Evasion: ' + defenses.evasion")
		i.ra.ra-fw.ra-player-dodge(@click="edit.evasion = !edit.evasion")
		span.fw(v-if="!edit.evasion") {{ defenses.evasion - onslaught }}
		input.fw(v-else, v-model="defenses.evasion", type="text")
</template>
<script>
export default {
  name: 'Defenses',
  props: ['defenses', 'onslaught'],
  data: () => ({
    edit: {
      parry: false,
      evasion: false,
    },
  }),
}
</script>
<style lang="scss" scoped>
@import '../../../assets/scss/colors';
.fw {
    text-align: center;
    display: inline-block;
    width: 1.4rem;
}
.ra {
    &:hover {
        cursor: pointer;
        box-sizing: border-box;
        border-radius: 50%;
        background: $dark-gold;
        padding: 3px;
        margin: -3px;
    }
}
</style>
