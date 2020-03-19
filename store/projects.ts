import { Store } from 'vuex'
import { IProject } from '../Interfaces/IProject'

interface IProjectsState {
  projects: IProject[]
}

export const state = (): IProjectsState => ({
  projects: []
})

export const mutations = {
  setProjects(state: IProjectsState, list: IProject[]) {
    state.projects = list
  }
}

export const actions = {
  async nuxtServerInit({ commit }: Store<IProject>) {
    const files = await require.context(
      '~/assets/content/projects/',
      false,
      /\.json$/
    )
    const projects: IProject[] = files.keys().map((key: string) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setProjects', projects)
  }
}
