/*
 * @Author: gooing
 * @since: 2020-02-02 14:59:46
 * @lastTime: 2020-06-26 23:01:42
 * @LastAuthor: Dongzy
 * @FilePath: \pixivic-nuxt\store\state.js
 * @message:
 */

export default {
  counter: 0,
  user: {
    avatar: 'https://pic.pixivic.com/40655.png',
    createDate: '2020-03-28T21:06:50.000Z',
    email: '1232132@qq.com',
    gender: null,
    id: 40655,
    isBan: 1,
    isBindQQ: true,
    isCheckEmail: false,
    location: null,
    permissionLevel: 1,
    signature: null,
    star: 0,
    updateDate: '2020-03-28T21:05:33.000Z',
    username: 'qq22222',
  },
  cachedViews: [],
  showTab: false,
  likeStatus: null, // 点赞画作状态
  followStatus: null, // 画师关注状态
  detail: null, // 详情信息
  loginBoolean: false,
  collectBoolean: false,
  readyCollectItem: {},
  collectInfo: {},
}
