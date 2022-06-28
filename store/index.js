export const state = () => ({
  counter: 0,
  sideMenuIsOpen: false,
  signature: '',
})

export const mutations = {
  INCREASE_COUNTER(state) {
    state.counter++
  },
  TOOGLE_SIDE_MENU(state) {
    state.sideMenuIsOpen = !state.sideMenuIsOpen
  },
  SAVE_SIGNATURE(state, signature) {
    state.signature = signature
  },
}

export const actions = {
  increment({ commit }) {
    commit('INCREASE_COUNTER')
  },
  toggleSideMenu({ commit }) {
    commit('TOOGLE_SIDE_MENU')
  },
  saveSignature({ commit }, signature) {
    commit('SAVE_SIGNATURE', signature)
  },
}
export const getters = {
  getCounter(state) {
    return state.counter
  },
  getSideMenuIsOpen(state) {
    return state.sideMenuIsOpen
  },
  getSignature(state) {
    return state.signature
  },
}
