/*
 * @Author: Dongzy
 * @since: 2020-02-02 14:59:46
 * @lastTime: 2020-06-26 22:11:26
 * @LastAuthor: Dongzy
 * @FilePath: \pixivic-nuxt\plugins\api\modules\rank.js
 * @message:
 */
import axios from '../base'

function getRank(params) {
  return axios({
    url: `/ranks`,
    method: 'get',
    params: { ...params, pageSize: params.pageSize || 20 },
  })
}

export { getRank }
