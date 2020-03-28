<template>
  <v-container fluid class="container">
    <nav-button color="black" icon-color="white" />
    <play--top />
    <div>Play</div>
  </v-container>
</template>
<script>
import NavButtonVue from '../../components/NavButton.vue'
import PlayTopVue from '../../components/Play--Top.vue'
export default {
  components: {
    'play--top': PlayTopVue,
    'nav-button': NavButtonVue
  },
  mounted() {
    this.$ga.page({
      page: '/play',
      title: 'Play page',
      location: window.location.href
    })
  }
}
</script>
<style lang="scss" scoped>
.container {
  background-color: var(--v-primary-base);
  margin: 0;
  padding: 1%;
}
</style>
