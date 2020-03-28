<template>
  <v-container fluid class="container">
    <nav-button color="accent" />
    <work--top />
    <work--recents />
    <work--clients />
  </v-container>
</template>
<script>
import WorkTop from '../components/Work--Top.vue'
import WorkRecents from '../components/Work--Recents.vue'
import WorkClients from '../components/Work--Clients.vue'
import NavButtonVue from '../components/NavButton.vue'

export default {
  components: {
    'work--top': WorkTop,
    'work--recents': WorkRecents,
    'work--clients': WorkClients,
    'nav-button': NavButtonVue
  },
  // asyncData(context) {
  // console.log(context)
  // send config for the fab button to vuex
  // },
  mounted() {
    this.$ga.page({
      page: '/work',
      title: 'Work page',
      location: window.location.href
    })
  }
  // transition: 'slide-left'
}
</script>
<style lang="scss" scoped>
.container {
  background-color: var(--v-primary-base);
  margin: 0;
  padding: 1%;
}
</style>
