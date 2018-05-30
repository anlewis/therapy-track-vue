/* global localStorage */

import User from '@/models/user';
import * as MutationTypes from '@/store/mutation-types';

const state = {
  user: User.from(localStorage.token),
};

const getters = {
  currentUser() {
    return state.user;
  },
};

const mutations = {
  [MutationTypes.SIGNIN]() {
    state.user = User.from(localStorage.token);
  },
  [MutationTypes.SIGNOUT]() {
    state.user = null;
  },
};

const actions = {
  login({ commit }) {
    commit(MutationTypes.SIGNIN);
  },
  logout({ commit }) {
    commit(MutationTypes.SIGNOUT);
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
