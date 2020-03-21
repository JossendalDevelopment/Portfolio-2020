<template>
  <v-app dark class="app-main-container">
    <v-content>
      <v-container fluid style="height: 100%; padding: 0;">
        <nuxt />
      </v-container>
    </v-content>

    <v-speed-dial
      v-model="fab"
      left
      top
      direction="bottom"
      transition="scale-transition"
      style="position: fixed;"
    >
      <template v-slot:activator>
        <v-fab-transition>
          <v-btn :key="Math.random()" v-model="fab" color="primary" fab>
            <v-icon v-if="fab" color="secondary">mdi-close</v-icon>
            <v-icon v-else color="secondary">input</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <nuxt-link to="/" class="home-link">
        Home
      </nuxt-link>
      <nuxt-link to="/work" class="work-link">
        Work
      </nuxt-link>
      <nuxt-link to="/play" class="play-link">
        Play
      </nuxt-link>
    </v-speed-dial>
  </v-app>
</template>

<script lang="ts">
export default {
  data() {
    return {
      fab: false
    }
  }
}
</script>
<style lang="scss" scoped>
.v-application.app-main-container {
  min-height: 100%;
}
</style>
