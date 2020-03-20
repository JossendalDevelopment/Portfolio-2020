<template>
  <v-app dark class="app_main_container">
    <!-- <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>-->
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
        <v-btn v-model="fab" color="primary" fab>
          <v-icon v-if="fab" color="secondary">mdi-close</v-icon>
          <v-icon v-else color="secondary">input</v-icon>
        </v-btn>
      </template>
      <nuxt-link to="/" class="home_link">
        Home
        <!-- <v-icon>mdi-plus</v-icon> -->
      </nuxt-link>
      <nuxt-link to="/work" class="work_link">
        Work
        <!-- <v-icon>mdi-delete</v-icon> -->
      </nuxt-link>
      <nuxt-link to="/play" class="play_link">
        Play
        <!-- <v-icon>mdi-delete</!-->
      </nuxt-link>
    </v-speed-dial>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>-->
  </v-app>
</template>

<script lang="ts">
export default {
  data() {
    return {
      fab: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style lang="scss">
.v-application.app_main_container {
  min-height: 100%;
}
</style>
