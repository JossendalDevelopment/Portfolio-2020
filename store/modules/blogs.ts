import { Store } from 'vuex'
import { IBlog } from '../../Interfaces/IBlog'

interface IBlogState {
  blogs: IBlog[]
}

export const state = (): IBlogState => ({
  blogs: []
})

export type BlogsModuleState = ReturnType<typeof state>

export const getters = (state: IBlogState): IBlog[] => {
  return state.blogs
}

export const mutations = {
  setBlogs(state: IBlogState, list: IBlog[]) {
    state.blogs = list
  }
}

export const actions = {
  async fetchBlogs({ commit }: Store<IBlog>) {
    const files = await require.context(
      '~/assets/content/blogs/',
      false,
      /\.json$/
    )
    const blogs: IBlog[] = files.keys().map((key: string) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogs', blogs)
  }
}
