<template>
  <v-container fluid class="container">
    <div class="text-center inner_container">
      <div class="left">
        <div class="title_wrapper">
          <h1 class="work">Wo<span>rk.</span></h1>
          <span ref="scrollarrow" class="scroll-arrow">
            <span class="arrow-point">&larr;</span> scroll
          </span>
        </div>
        <work--left />
      </div>
      <div class="right">
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
  </v-container>
</template>
<script lang="ts">
import throttle from 'lodash/throttle'
import WorkLeft from '../components/Work--Left.vue'

export default {
  components: {
    'work--left': WorkLeft
  },
  // transition: 'slide-left'
  mounted() {
    window.addEventListener('scroll', throttle(this.handleScroll, 200))
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY < 5) {
        ;(this.$refs.scrollarrow as HTMLElement).classList.remove('hide')
      } else if (window.scrollY < 20) {
        ;(this.$refs.scrollarrow as HTMLElement).classList.add('hide')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  background-color: var(--v-primary-base);
  height: 100%;
  margin: 0;
  .inner_container {
    display: flex;
    height: 100%;
  }
}
.left {
  width: 50%;
  height: 100%;
  .title_wrapper {
    position: relative;
    height: 100vh;
    .work {
      position: absolute;
      top: 35%;
      right: -16.6rem;
      font-size: 14rem;
      color: var(--v-accent-base);
    }
  }
  span {
    color: var(--v-secondary-base);
  }
}
.right {
  background-color: var(--v-accent-base);
  width: 50%;
  height: 100%;
}
</style>
