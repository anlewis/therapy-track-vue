/* global localStorage */

import User from '@/models/User'
import * as MutationTypes from '@/store/mutation-types'

const state = {
  user: User.from(localStorage.token)
}

const getters = {
  currentUser(state) {
    return state.user
  }
}

const mutations = {
  [MutationTypes.SIGNIN](state) {
    state.user = User.from(localStorage.token)
  },
  [MutationTypes.SIGNOUT](state) {
    state.user = null
  }
}

const actions = {
  login({ commit }) {
    commit(MutationTypes.SIGNIN)
  },

  logout({ commit }) {
    commit(MutationTypes.SIGNOUT)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}