<!--
 * @Author: Dongzy
 * @since: 2020-06-26 22:13:35
 * @lastTime: 2020-06-26 22:44:37
 * @LastAuthor: Dongzy
 * @FilePath: \pixivic-nuxt\pages\illusts\_id.vue
 * @message: 
-->
<template>
  <div>{{ illustDetail }}</div>
</template>

<script>
export default {
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      illustDetail: null,
    }
  },
  mounted() {
    this.reqAdminIllust()
  },
  methods: {
    reqAdminIllust() {
      this.$api.detail.reqIllustDetail(this.$route.params.id).then((res) => {
        const data = res.data.data
        this.illustDetail = this.handleData(data)
      })
    },
  },
  head() {
    return {
      title: 'pixivic',
      meta: [
        {
          hid: 'Pixivic',
          name: '二次元插画',
          content: '二次元插画',
        },
      ],
    }
  },
}
</script>

<style></style>
