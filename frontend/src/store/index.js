import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import moduleAluno from './aluno/moduleAluno'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    aluno: moduleAluno
  }
})
