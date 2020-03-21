<template>
  <div class="text-center inner-container">
    <div class="left">
      <h1 class="animate-left work work__left">
        Wo
      </h1>
      <span ref="scrollarrow" class="scroll-arrow">
        <span class="arrow-point">&larr;</span> scroll
      </span>
    </div>
    <div class="right">
      <h1 class="animate-right work work__right">rk.</h1>
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </div>
  </div>
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
  display: flex;
  height: 100vh;
}
.left,
.right {
  width: 50%;
  height: 100%;
  position: relative;
}
.left {
  z-index: 1;
  background-color: var(--v-primary-base);
}
.right {
  background-color: var(--v-accent-base);
  z-index: 0;
  height: 97.5%;
}
.work {
  display: flex;
  position: absolute;
  height: 100vh;
  font-size: 7rem;
  &__left {
    top: 35%;
    right: 0rem;
    color: var(--v-accent-base);
  }
  &__right {
    top: 36.5%;
    left: 0rem;
    z-index: -1;
    color: var(--v-secondary-base);
  }
}
</style>
