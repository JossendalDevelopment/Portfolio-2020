<template>
  <v-app style="background: none;">
    <div class="app_error_container">
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <!-- <NuxtLink to="/"> -->
      <v-btn to="/" color="secondary" large raised style="font-size: 2rem;"
        >Home</v-btn
      >
      <!-- </NuxtLink> -->
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped>
.app_error_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
h1 {
  font-size: 6rem;
}
</style>
