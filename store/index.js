/*
 * @Author: Dongzy
 * @since: 2020-06-25 13:52:26
 * @lastTime: 2020-06-26 14:38:21
 * @LastAuthor: Dongzy
 * @FilePath: \pixivic-nuxt\store\index.js
 * @message:
 */

import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
  })

export default store
