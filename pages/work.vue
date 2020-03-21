<template>
  <v-container fluid class="container">
    <work--top />
    <work--left />
  </v-container>
</template>
<script>
import WorkTop from '../components/Work--Top.vue'
import WorkLeft from '../components/Work--Left.vue'

export default {
  components: {
    'work--top': WorkTop,
    'work--left': WorkLeft
  },
  asyncData(context) {
    console.log(context)
    // send config for the fab button to vuex
  },
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
  height: 100%;
  margin: 0;
  padding: 1%;
}
</style>
