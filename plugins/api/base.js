/*
 * @Author: gooing
 * @since: 2020-02-02 14:59:46
 * @lastTime: 2020-06-27 00:16:44
 * @LastAuthor: Dongzy
 * @FilePath: \pixivic-nuxt\plugins\api\base.js
 * @message:
 */
import axios from 'axios'
// 创建axios实例
const instance = axios.create({
  baseURL: 'https://api.pixivic.com',
  // baseURL: process.env.VUE_APP_BASE_API,
  timeout: 20000,
  validateStatus(status) {
    return status >= 200 && status < 600
  },
})

instance.interceptors.request.use(
  (config) => {
    config.headers.Token = '55673d83-a269-45b4-954f-59c731ddb8f0'
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    // console.log('response', response);
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
