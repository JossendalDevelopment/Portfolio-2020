<template>
  <v-container fluid>
    <v-row class="justify-center">
      <h3 style="font-size: 3rem; color: var(--v-secondary-base)">Clients</h3>
    </v-row>
    <v-row class="align-center justify-center">
      <v-col style="max-width: 660px;">
        <v-row>
          <v-img
            v-for="project in projects"
            :key="project.date"
            :src="project.logo"
            :alt="project.title + '_icon'"
            aspect-ratio="16 / 9"
            max-height="10rem"
            min-height="10rem"
            min-width="33%"
            contain
          />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  computed: {
    projects() {
      return this.$projects.projects
    }
  }
}
</script>
