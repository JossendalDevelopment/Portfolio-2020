import { Store } from 'vuex'
import { IProject } from '../Interfaces/IProject'

export const actions = {
  async nuxtServerInit({ dispatch }: Store<IProject>) {
    await dispatch('modules/projects/fetchProjects')
  }
}
