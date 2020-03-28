<template>
  <v-speed-dial
    v-model="fab"
    left
    top
    direction="bottom"
    transition="scale-transition"
    style="position: fixed; z-index: 99;"
  >
    <template v-slot:activator>
      <v-fab-transition>
        <v-btn
          :key="Math.random()"
          v-model="fab"
          :color="color"
          name="navigation button"
          fab
        >
          <v-icon v-if="fab" :color="iconColor">mdi-close</v-icon>
          <v-icon v-else :color="iconColor">input</v-icon>
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
</template>
<script lang="ts">
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: 'primary'
    },
    iconColor: {
      type: String,
      required: false,
      default: 'secondary'
    }
  },
  data() {
    return {
      fab: false
    }
  }
}
</script>
<style lang="scss" scoped>
.home-link,
.work-link,
.play-link {
  font-size: 2rem;
  position: relative;
  width: 100%;
  text-align: center;
  &::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 50%;
    right: 100%;
    background-color: var(--v-accent-lighten1);
    transition: right 0.3s;
    z-index: -1;
  }
  &:hover::after {
    right: 0px;
  }
}
</style>
