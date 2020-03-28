<template>
  <v-app dark class="app-main-container">
    <v-content>
      <v-container fluid style="height: 100%; padding: 0;">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss" scoped>
.v-application.app-main-container {
  min-height: 100%;
}
</style>
