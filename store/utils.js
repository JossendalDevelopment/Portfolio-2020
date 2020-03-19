export const state = {
  drawerOpen: false,
  githubApiResponse: []
}
export const getters = {
  drawer: (state) => {
    return state.drawerOpen
  },
  getCachedApiResponse: (state) => {
    return state.githubApiResponse
  }
}
export const mutations = {
  toggleDrawer(state) {
    state.drawerOpen = !state.drawerOpen
  },
  setGithubApiResponse(state, context) {
    state.githubApiResponse = context.githubApiResponse
  }
}
export const actions = {
  toggleDrawer(context) {
    context.commit('toggleDrawer')
  },
  setGithubApiResponse(context, payload) {
    context.commit('setGithubApiResponse', payload)
  }
}
