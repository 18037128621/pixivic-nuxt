<!--
 * @Author: Dongzy
 * @since: 2020-06-24 19:43:46
 * @lastTime: 2020-06-27 00:17:48
 * @LastAuthor: Dongzy
 * @FilePath: \pixivic-nuxt\pages\index.vue
 * @message: 
-->
<template>
  <div class="container">
    <ul style="height: 100%;">
      <li v-for="(item, index) in pictureList" :key="index">
        <span>{{ item.title }}</span>
        <nuxt-link :to="{ path: `illusts/${item.id}` }">
          {{ item.artistPreView.name + item.caption }}</nuxt-link
        >
        <span v-for="e in item.tags" :key="e.id">{{ e }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  data() {
    return {
      page: 1,
      mode: 'day',
      date: dayjs(new Date()).add(-2, 'days').format('YYYY-MM-DD'),
      pictureList: [],
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.$api.rank
        .getRank({
          page: this.page++,
          pageSize: 200,
          date: this.date,
          mode: this.mode,
        })
        .then((res) => {
          if (!res.data.data) {
          } else {
            this.pictureList = this.pictureList.concat(res.data.data)
          }
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
