<template>
  <div>
    <div
    class="container-main-article"
    v-for="(item, index) in articleList"
    :key="index"
    >
      <div class="main-article-title">{{item.title}}</div>
      <div class="main-article-date">
        <img class="article-date-size" src="~assets/cander.png" alt="">
        <span>{{item.create_at}}</span>
      </div>
      <div>{{item.content | modify}}</div>
      <div class="article-bottom">
        <div>
          <span class="article-tag-item">{{item.classify}}</span>
        </div>
        <nuxt-link class="article-show-all" :to="`/detail/${item._id}`">展开全文>></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  layout: 'adjust',
  async asyncData () {
    let { data } = await axios.get('/article/articleList', {
      params: {
        page: 1,
        limit: 10
      }
    })
    return { articleList: data.articleList }
  },
  filters: {
    modify (value) {
      const s = value.indexOf('\n')
      return value.slice(0, s)
    }
  }
}
</script>

<style>



.container-main-article {
  padding: 0 20px 20px;
  margin-bottom: 20px;
}
.main-article-title:after {
  content: '';
  display: block;
  position: absolute;
  left: -20px;
  top: 0;
  width:5px;
  height: 100%;
  border-left: 5px solid #4d4d4d;
}
@media screen and (max-width: 800px) {
  .main-article-title:after {
    display: none;
  }
}
.main-article-title {
  position: relative;
  padding-top: 20px;
  padding-bottom: 10px;
  color: #696969;
  font-size: 26px;
  font-weight: 400;
}
.main-article-date {
  color: #999;
  font-size: 16px;
  height: 40px;
  display: flex;
  align-items: center;
}
.article-date-size {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}
.article-bottom {
  border-top: 1px solid #ddd;
  margin: 30px auto 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.article-tag-item {
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
  font-size: 10px;
  color: #fff;
  height: 18px;
  line-height: 18px;
  float: left;
  padding: 0 5px 0 10px;
  position: relative;
  border-radius: 0 5px 5px 0;
  margin: 5px 9px 5px 8px;
  background: #94635c;
}
.article-tag-item:before {
  content: " ";
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: -18px;
  border: 9px solid transparent;
  border-right-color: #94635c;
}
.article-tag-item:after {
  content: " ";
  width: 4px;
  height: 4px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.3);
  position: absolute;
  top: 7px;
  left: 2px;
}
.article-show-all {
  width: 86px;
  height: 28px;
  background-color: #4d4d4d;
  color: #fff;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  text-decoration: none;
}
</style>
