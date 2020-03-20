import Vue from 'vue'

export default (context /* inject */) => {
  Vue.prototype.$projects = function() {
    return {
      projects: context.app.store.state.modules.projects.projects,
      fetch: () => context.app.store.dispatch('modules/projects/fetchProjects')
    }
  }
}
