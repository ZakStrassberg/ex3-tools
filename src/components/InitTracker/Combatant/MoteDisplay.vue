<template lang="pug">
  section.MoteDisplay
    div.personal(v-tooltip={ content: 'Personal Motes' })
      i.icon-personal-motes
      input(type='text', :value='moteDisplay.personal', @change='updateMotes' name="personal")
    div.peripheral(v-tooltip={ content: 'Peripheral Motes' })
      i.icon-peripheral-motes
      input(type='text', :value='moteDisplay.peripheral' @change='updateMotes' name="peripheral")
</template>
<script>
export default {
  name: 'MoteDisplay',
  props: ['motes'],
  data: () => ({}),
  methods: {
    updateMotes ({ target: { name, value }}) {
      const [available, total] = value.split('/')
      this.$set(this.motes[name], 'available', parseInt(available, 10) || 0)
      if (total) {
        this.$set(this.motes[name], 'total', parseInt(total, 10) || 0)
      }
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
<style lang="scss" scoped>
.MoteDisplay {
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  white-space: nowrap;
  input {
    flex: 0 1 60px;
    width: 60px;
    text-align: center;
  }
}
</style>
