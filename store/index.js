export const state = () => ({
  counter: 0,
  sideMenuIsOpen: false,
})

export const mutations = {
  INCREASE_COUNTER(state) {
    state.counter++
  },
  TOOGLE_SIDE_MENU(state) {
    state.sideMenuIsOpen = !state.sideMenuIsOpen
  },
}

export const actions = {
  increment({ commit }) {
    commit('INCREASE_COUNTER')
  },
  toggleSideMenu({ commit }) {
    commit('TOOGLE_SIDE_MENU')
  },
}
export const getters = {
  getCounter(state) {
    return state.counter
  },
  getSideMenuIsOpen(state) {
    return state.sideMenuIsOpen
  },
}
