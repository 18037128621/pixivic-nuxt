<!--
 * @Author: Dongzy
 * @since: 2020-06-24 19:43:46
 * @lastTime: 2020-06-29 00:16:02
 * @LastAuthor: Dongzy
 * @FilePath: \pixivic-nuxt\pages\index.vue
 * @message: 
-->
<template>
  <div class="container">
    <ul class="picture-grid">
      <li
        v-for="(item, index) in pictureList"
        :key="index"
        class="picture-item"
      >
        <img :title="item.title" :alt="item.caption" :src="item.src" />
        <span>{{ item.artistPreView.name }}</span>
        <a :href="`/illusts/${item.id}`">{{ item.title }}</a>
        <div class="caption">{{ item.caption }}</div>
        <ul class="tags">
          <li v-for="e in item.tags" :key="e.id">{{ e.name }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { replaceSmallImg } from '@/util'
export default {
  watchQuery: true,
  async asyncData({ app, params }) {
    const param = {
      page: 1,
      pageSize: 200,
      date: dayjs(new Date()).add(-2, 'days').format('YYYY-MM-DD'),
      mode: 'day',
    }
    let res = []
    for (let i = 1; i < 20; i++) {
      param.page = i
      const { data } = await app.$api.rank.getRank(param)
      if (data.data && data.data.length) {
        res = res.concat(data.data)
      } else {
        break
      }
    }
    res.forEach((item) => {
      item.src = replaceSmallImg(item.imageUrls[0].medium)
    })
    return {
      pictureList: res,
    }
  },
  data() {
    return {
      page: 1,
      mode: 'day',
      date: dayjs(new Date()).add(-2, 'days').format('YYYY-MM-DD'),
    }
  },
  mounted() {
    // this.getList()
  },
  methods: {},
  head() {
    return {
      title: 'pixivic',
      meta: [],
    }
  },
}
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.picture-grid {
  width: 100%;
  display: grid;
  list-style: none;
  gap: 24px;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, 500px);
  -webkit-box-pack: center;
  justify-content: center;
  margin: 20px;
  padding: 0px;
  .picture-item {
    overflow: hidden;
    img {
      height: 200px;
      width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .caption {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 200px;
      height: 200px;
    }
    .tags {
    }
  }
}
</style>
