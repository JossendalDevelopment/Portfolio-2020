import Vue from 'vue'

export default (context /* inject */) => {
  Vue.prototype.$blogs = {
    blogs: context.app.store.state.modules.blogs.blogs,
    fetch: () => context.app.store.dispatch('modules/projects/fetchBlogs')
  }
}
