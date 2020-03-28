<template>
  <v-row class="inner-container" no-gutters>
    <v-col class="left">
      <div style="height: 40%;">
        <p>A Selection</p>
        <p>of recent clients and the work we did for them.</p>
      </div>
      <h1 class="work work__left">
        Pl
      </h1>
      <span ref="scrollarrow" class="scroll-arrow">
        <span class="arrow-point">&larr;</span> scroll
      </span>
    </v-col>
    <v-col class="right">
      <h1 class="work work__right">ay.</h1>
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>
<script>
import throttle from 'lodash/throttle'

export default {
  mounted() {
    window.addEventListener('scroll', throttle(this.handleScroll, 200))
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (!this.$refs.scrollarrow) return

      if (window.scrollY < 10) {
        this.$refs.scrollarrow.classList.remove('hide')
      } else if (!this.$refs.scrollarrow.classList.value.includes('hide')) {
        this.$refs.scrollarrow.classList.add('hide')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.inner-container {
  height: 100vh;
}
.left,
.right {
  height: 97.5%;
  position: relative;
}
.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
}
.right {
  background-color: var(--v-black-base);
  z-index: 0;
}
.work {
  display: flex;
  position: absolute;
  height: 100vh;
  font-size: 10rem;
  &__left {
    top: 35%;
    right: 0rem;
    color: var(--v-black-base);
    animation: moveInDown 1s ease-in;
  }
  &__right {
    top: 37%;
    left: 0rem;
    z-index: -1;
    color: var(--v-accent-base);
    animation: moveInUp 1s ease-in;
  }
}
</style>
