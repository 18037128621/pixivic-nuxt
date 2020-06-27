<!--
 * @Author: Dongzy
 * @since: 2020-06-24 19:43:46
 * @lastTime: 2020-06-27 14:55:31
 * @LastAuthor: Dongzy
 * @FilePath: \pixivic-nuxt\layouts\default.vue
 * @message: 
-->
<template>
  <div>
    <HeaderBar />
    <main ref="container" class="content-container">
      <Nuxt />
    </main>
  </div>
</template>
<script>
import HeaderBar from '@/components/Home/HeaderBar'

export default {
  components: {
    HeaderBar,
  },
}
</script>
<style lang="less">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.content-container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  top: 5rem;
  &::after {
    display: table;
    content: '';
    clear: both;
  }
}
</style>
