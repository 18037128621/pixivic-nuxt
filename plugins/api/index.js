/*
 * @Author: gooing
 * @since: 2020-02-02 14:59:46
 * @lastTime: 2020-06-26 21:58:36
 * @LastAuthor: Dongzy
 * @FilePath: \pixivic-nuxt\plugins\api\index.js
 * @message:
 */
import * as rank from './modules/rank'
import * as detail from './modules/detail'
import * as search from './modules/search'
import * as user from './modules/user'
import * as comment from './modules/comment'
import * as spot from './modules/spot'
import * as collect from './modules/collect'

export default (context, inject) => {
  const api = {
    rank,
    search,
    detail,
    user,
    comment,
    spot,
    collect,
  }
  // Inject $hello(msg) in Vue, context and store.
  inject('api', api)
  // For Nuxt <= 2.12, also add 👇
  context.$api = api
}
