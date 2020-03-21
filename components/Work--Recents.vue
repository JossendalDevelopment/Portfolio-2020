<template>
  <v-container fluid>
    <v-row class="justify-center">
      <h3 style="font-size: 3rem; color: var(--v-secondary-base)">
        Recent Projects
      </h3>
    </v-row>
    <v-row class="align-center">
      <v-col>
        <div v-if="projects.length > 0" class="changelog-list">
          <div class="line"></div>
          <div
            v-for="repo in projects"
            :key="repo.title"
            class="changelog-item not-showing"
          >
            <div style="flex-direction: column;">
              <p class="repo-name">{{ repo.title }}</p>
              <p class="repo-desc">{{ repo.description }}</p>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="error-message">
            Sorry, the dev team must be out to lunch or something... Check back
            later.
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      repos: [],
      observer: null,
      working: true
    }
  },
  computed: {
    projects() {
      return this.$projects().projects
    }
  },
  mounted() {
    const changelogItems = document.querySelectorAll('.changelog-item')

    this.observer = new IntersectionObserver((items) => {
      items.forEach((item) => {
        if (!item.isIntersecting) {
          // if item not showing, hide it with .not-showing class
          item.target.classList.add('not-showing')
          return
        }

        item.target.classList.remove('not-showing')
      })
    })

    // start observing
    changelogItems.forEach((item) => this.observer.observe(item))
  }
}
</script>
<style lang="scss" scoped>
$changelogLeftSpacing: 120px;

.changelog-list {
  position: relative;
  width: 70%;
}

.line {
  width: 0.2rem;
  top: 0.2rem;
  display: block;
  height: 100%;
  position: absolute;
  background: black;
  left: $changelogLeftSpacing - 16;
}

.changelog-item {
  position: relative;
  display: flex;
  padding-left: $changelogLeftSpacing;
  margin-bottom: 14rem;
  font-size: 1.6rem;

  &:before,
  .date,
  p {
    transform: none;
    opacity: 1;
    transition: all 0.4s cubic-bezier(0.76, 0, 0.26, 1.46);
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0.4rem;
    left: $changelogLeftSpacing - 21px;
    background: var(--v-primary-base);
    border: 2px solid black;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  &:last-child:before {
    top: 7px;
  }

  .date {
    position: absolute;
    text-align: right;
    left: 0;
    color: #bbb;
  }

  p {
    margin: 0;
    padding-left: 20px;
  }
}
.repo-name {
  font-weight: bold;
  font-size: 1.8rem;
  color: var(--v-accent-base);
}
.repo-desc {
  color: var(--v-secondary-base);
  // width: 70%;
}
.error-message {
  color: var(--v-primary-base);
  font-size: 1.2rem;
}

.changelog-item.not-showing {
  &:before,
  .date,
  p {
    opacity: 0;
    transform: scale(0.5);
  }

  .date {
    transform: scale(0.5) translateX(100px);
  }

  p {
    transform: scale(0.5) translateX(-170px);
  }
}
</style>
