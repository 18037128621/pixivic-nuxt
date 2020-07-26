<!--
 * @Author: Dongzy
 * @since: 2020-06-24 19:43:46
 * @lastTime: 2020-06-29 00:38:41
 * @LastAuthor: Dongzy
 * @FilePath: \pixivic-nuxt\pages\rank\_mode\_date.vue
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
import { replaceSmallImg } from '@/util'
export default {
  async asyncData({ app, params }) {
    const param = {
      page: 1,
      pageSize: 200,
      date: params.date,
      mode: params.mode,
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
      params,
    }
  },
  data() {
    return {}
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
