<template>
  <div>
    <div class="container-main-article">
      <div class="main-article-title">{{article.title}}</div>
      <div class="main-article-date">
        <img class="article-date-size" src="~assets/cander.png" alt="">
        <span>{{article.create_at}}</span>
      </div>
      <div v-html="markedToHtml" class="article-markdown-border"></div>
      <div class="article-bottom">
        <div>
          <span class="article-tag-item">{{article.classify}}</span>
        </div>
      </div>
    </div>
    <div class="article-prev-next-border" v-if="false">
      <a class="article-link-prev-item" href="http://www.baidu.com">&lt; 超小手势库</a>
      <a class="article-link-next-item" href="http://www.baidu.com">超小手势库 &gt;</a>
    </div>
    <div class="article-website-by">
      <span>&copy;</span>
      <span class="article-website-middle">2018 </span>
      <span>keenjaan</span>
    </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import marked from 'marked'
import hlj from 'highlight.js'

export default {
  layout: 'adjust',
  async asyncData ({params}) {
    let { data } = await axios.get('/article/getOneArticle', {
      params: {
        id: params.id
      }
    })
    return { article: data.oneArticle }
  },
  computed: {
    markedToHtml () {
      marked.setOptions({
        highlight: function (code) {
          return hlj.highlightAuto(code).value
        }
      })
      return marked(this.article.contentToMark)
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
}
@media screen and (max-width: 800px) {
  .main-article-title {
    font-size: 18px;
    font-weight: 300;
    color: #696969;
  }
  .main-article-title:after {
    display: none;
  }
}
.article-prev-next-border {
  display: flex;
  justify-content: space-between;
}
.article-link-prev-item {
  text-decoration: none;
  color: #08c;
  width: 48%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.article-link-next-item {
  text-decoration: none;
  color: #08c;
  width: 48%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: right;
}
.article-website-by {
  color: #1a1a1a;
  font-size: 12px;
  margin: 30px auto;
  text-align: center;
}
.article-website-middle {
  margin: 0 5px;
}

.article-markdown-border p {
  line-height: 30px;
  margin: 20px 0;
}

.article-markdown-border pre {
  margin: 20px 0;
  background-color: #f7f7f7;
  padding: 20px 10px;
}
</style>
