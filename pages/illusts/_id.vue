<!--
 * @Author: Dongzy
 * @since: 2020-06-26 22:13:35
 * @lastTime: 2020-06-29 00:28:15
 * @LastAuthor: Dongzy
 * @FilePath: \pixivic-nuxt\pages\illusts\_id.vue
 * @message: 
-->
<template>
  <div>
    <main v-if="illustDetail">
      <figure class="figure">
        <img
          :title="illustDetail.title"
          :alt="illustDetail.caption"
          :src="illustDetail.src"
          fit="contain"
        />
      </figure>
      <div class="card">
        <h1>{{ illustDetail.title }}</h1>
        <div class="disc" />
        {{ illustDetail.caption }}
      </div>
      <div class="tags">
        <ul>
          <li
            v-for="item of illustDetail.tags"
            :key="item.id"
            :title="item.translatedName"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <ul class="populor">
        <li title="阅读数">
          <i class="el-icon-view" />
          {{ illustDetail.totalView }}
        </li>
        <li title="收藏数">
          <i class="el-icon-star-off" />
          {{ illustDetail.totalBookmarks }}
        </li>
      </ul>
      <div class="date" title="投稿时间">
        {{ illustDetail.createDate }}
      </div>
      <section>
        <h2>{{ illustDetail.artistPreView.name }}</h2>
      </section>
      <section class="relate">
        <ul>
          <li
            v-for="(item, index) in relateIllustList"
            :key="index"
            class="picture-item"
          >
            <img :title="item.title" :alt="item.caption" :src="item.src" />
            <span>{{ item.artistPreView.name }}</span>
            <a :href="`/illusts/${item.id}`">{{ item.title }}</a>
            <div class="caption">{{ item.caption }}</div>
            <ul class="tags">
              <li v-for="e in item.tags" :key="e.id + 2">{{ e.name }}</li>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
import { replaceSmallImg } from '@/util'
export default {
  watchQuery: ['id'],
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  },
  async asyncData({ app, params }) {
    const param = params.id
    const { data } = await app.$api.detail.reqAdminIllust(param)
    data.data.src = replaceSmallImg(data.data.imageUrls[0].medium)

    let relateIllustList = []
    const reqBody = {
      page: 1,
      illustId: params.id,
    }
    for (let i = 1; i < 3; i++) {
      reqBody.page = i
      const { data } = await app.$api.detail.reqRelatedIllust(reqBody)
      if (data.data && data.data.length) {
        relateIllustList = relateIllustList.concat(data.data)
      } else {
        break
      }
    }
    relateIllustList.forEach((item) => {
      item.src = replaceSmallImg(item.imageUrls[0].medium)
    })
    return {
      illustDetail: data.data,
      relateIllustList,
    }
  },
  data() {
    return {
      relateIllustList: [],
      illustDetail: null,
    }
  },
  mounted() {},
  methods: {
    // 一个没有感情的小编
    liteEditorAI(keyword) {
      const strList = ['', '是什么', '的用法', '怎么读', '-pixiv', '-pixivic']
      return strList.reduce((res, curr) => (res += keyword + curr + ' '), '')
    },
    computeKeywords() {
      return this.illustDetail.tags.reduce(
        (res, cur) => (res += cur.name + ' '),
        ''
      )
    },
  },
  head() {
    return {
      title: this.illustDetail.title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.computeKeywords(),
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.illustDetail.caption} - pixivic`,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://pixivic.com/illusts/${this.illustDetail.id}`,
        },
        {
          hid: 'og:id',
          property: 'og:id',
          content: `${this.illustDetail.id}`,
        },
        {
          hid: 'og:artist',
          property: 'og:artist',
          content: `${this.illustDetail.artistPreView.name}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.illustDetail.src}`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${this.illustDetail.caption} - pixivic`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.illustDetail.title} - ${this.illustDetail.artistPreView.name}的插画 - pixivic`,
        },
        { property: 'og:type', content: 'article' },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.figure {
  margin: 20px;
  img {
    width: 400px;
    height: 400px;
  }
}
.card {
  width: 800px;
  h1 {
    color: rgb(28, 28, 28);
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    margin: 0px 0px 8px;
  }
  .disc {
    color: rgb(92, 92, 92);
    line-height: 1.33;
    margin: 0px;
    overflow: hidden;
  }
  .tags {
    display: flex;
    color: rgb(61, 118, 153);
    line-height: 18px;
    margin: 16px 0px;
    ul {
      margin: 0 -6px 0 0;
      list-style: none;
      padding-left: 0;
      word-break: break-all;
      li {
        display: inline;
        margin: 0 12px 0 0;
        cursor: pointer;
      }
    }
  }
  .populor {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 16px -4px;
    list-style: none;
    padding: 0px;
    li {
      flex: 0 0 auto;
      margin: 0px 8px;
      display: list-item;
      text-align: -webkit-match-parent;
      font-size: 12px;
      color: rgb(173, 173, 173);
    }
  }
  .date {
    color: rgb(173, 173, 173);
    font-size: 12px;
    line-height: 1;
  }
}
</style>
