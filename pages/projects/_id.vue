<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" align="center">
        <div v-flex>{{ project.title }}</div>
        <p>{{ project.description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  validate({ params }) {
    return !!params.id
  },
  asyncData({ params, error, store }) {
    // console.log('PARAMS', params, store)
    // const project = this.$projects().projects.filter((p) => p.id === params.id)
    const project = store.state.modules.projects.projects.find(
      (p) => p.id === params.id
    )
    console.log('PROJECT', project)
    return { project }
  }
}
</script>
