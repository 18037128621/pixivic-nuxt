/*
 * @Author: Dongzy
 * @since: 2020-06-25 13:52:26
 * @lastTime: 2020-06-25 22:23:56
 * @LastAuthor: Dongzy
 * @FilePath: \pixivic-nuxt\store\actions.js
 * @message:
 */

import * as types from './mutation-types'
import {
  collectIllust,
  deleteCollect,
  followArtist,
} from '~/plugins/api/modules/user'

export const setUser = ({ commit }, user) => {
  commit(types.SET_USER, user)
}

export const clearCurrentState = ({ commit }) => {
  localStorage.removeItem('user')
  commit(types.SET_USER, null)
}

export const changeTab = ({ commit }, flag) => {
  commit(types.SHOW_TAB, flag)
}

// 收藏画作
export const handleCollectIllust = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    collectIllust(data)
      .then((res) => {
        if (res.status === 200) {
          const status = {
            illustId: data.illustId,
            like: true,
          }
          commit(types.SET_LIKE_STATUS, status)
          resolve(res)
        } else {
          reject(res)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// 取消收藏
export const deleteCollectIllust = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    deleteCollect(data)
      .then((res) => {
        if (res.status === 200) {
          const status = {
            illustId: data.illustId,
            like: false,
          }
          commit(types.SET_LIKE_STATUS, status)
          resolve(res)
        } else {
          reject(res)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// 关注画师
export const handleFollowArtist = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    followArtist(data)
      .then((res) => {
        if (res.status === 200) {
          const status = {
            artistId: data.artistId,
            follow: data.follow,
          }
          commit(types.SET_FOLLOW_STATUS, status)
          resolve()
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject()
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const setDetail = ({ commit }, data) => {
  commit(types.SET_DETAIL, data)
}
export const setLoginBoolean = ({ commit }) => {
  commit(types.SET_LOGIN_BOOLEAN)
}
export const setCollectBoolean = ({ commit }, data) => {
  commit(types.SET_COOLECT_BOOLEAN, data)
}
export const setCollectInfo = ({ commit }, data) => {
  commit(types.SET_COOLECT_INFO, data)
}
