<!--
 * @Author: Dongzy
 * @since: 2020-06-26 22:13:35
 * @lastTime: 2020-06-27 00:21:17
 * @LastAuthor: Dongzy
 * @FilePath: \pixivic-nuxt\pages\illusts\_id.vue
 * @message: 
-->
<template>
  <div>
    <div v-if="illustDetail">{{ illustDetail }}</div>
  </div>
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
      this.$api.detail.reqAdminIllust(this.$route.params.id).then((res) => {
        const data = res.data.data
        this.illustDetail = data
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
