<template>
  <v-layout column justify-center align-center class="inner-container">
    <nav-button color="primary" />
    <v-flex xs9></v-flex>
    <v-flex
      xs3
      class="right-bar"
      :style="{ backgroundColor: $vuetify.theme.currentTheme.primary }"
    >
      <div class="overhyped-tag-container">
        <p class="overhyped-tag-line">driven</p>
        <p class="overhyped-tag-line">dauntless</p>
        <p class="overhyped-tag-line">defiant</p>
        <p class="overhyped-tag-line">design</p>
      </div>
      <p
        :style="{ color: $vuetify.theme.currentTheme.accent }"
        class="vertical-text"
      >
        Development
      </p>
      <h1 class="text-headline">Jossendal</h1>
      <p class="text-sub-headline">
        Specializing in app development, design, and user experience.
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
import NavButtonVue from '../components/NavButton.vue'
export default {
  // transition: 'slide-left',
  components: {
    'nav-button': NavButtonVue
  },
  asyncData(context) {
    console.log(context)
    // send config for the fab button to vuex
  },
  mounted() {
    this.$ga.page({
      page: '/',
      title: 'Home page',
      location: window.location.href
    })
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.inner-container {
  height: 100%;
  padding: 4rem;
  background-image: url('~assets/vegas.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.right-bar {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 25rem;
}
.overhyped-tag-container {
  position: absolute;
  top: 3rem;
  left: -4.5rem;
}
.overhyped-tag-line {
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  margin: -1rem 0;
}
.text-headline {
  font-family: AvenirNext, Avenir, Helvetica, Arial, sans-serif;
  font-display: auto;
  position: absolute;
  right: 2rem;
  bottom: 8rem;
  font-size: 12rem;
}
.text-sub-headline {
  font-family: 'Playfair Display', serif;
  font-display: auto;
  position: absolute;
  bottom: 2rem;
  font-size: 1.6rem;
  margin: 0 8%;
}
.vertical-text {
  font-family: AvenirNext, Avenir, Helvetica, Arial, sans-serif;
  position: absolute;
  bottom: 25rem;
  right: 1.2rem;
  writing-mode: tb-rl;
  transform: rotate(-180deg);
  font-size: 3rem;
}

@media only screen and (max-width: 960px) {
  .text-headline {
    font-size: 10rem;
    bottom: 6rem;
  }
  .vertical-text {
    bottom: 20rem;
  }
}
@media only screen and (max-width: 775px) {
  .text-sub-headline {
    font-size: 1.4rem;
  }
}
@media only screen and (max-width: 640px) {
  .text-headline {
    font-size: 8rem;
  }
  .vertical-text {
    bottom: 17rem;
    font-size: 2.2rem;
  }
  .text-sub-headline {
    left: -6rem;
  }
}
@media only screen and (max-width: 575px) {
  .overhyped-tag-container {
    left: -5rem;
  }
  .overhyped-tag-line {
    font-size: 3rem;
  }
  .right-bar {
    width: 20rem;
  }
}
@media only screen and (max-width: 450px) {
  .text-headline {
    font-size: 8rem;
  }
  .text-sub-headline {
    left: -8rem;
  }
  .vertical-text {
    bottom: 15rem;
    font-size: 2rem;
  }
  .right-bar {
    width: 16rem;
  }
}
</style>
