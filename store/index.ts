import { Store } from 'vuex'

import { ProjectsModuleState } from './modules/projects'
import { BlogsModuleState } from './modules/blogs'

interface RootState extends ProjectsModuleState, BlogsModuleState {}

export const actions = {
  async nuxtServerInit(store: Store<RootState>) {
    await store.dispatch('modules/projects/fetchProjects')
    await store.dispatch('modules/blogs/fetchBlogs')
  }
}
