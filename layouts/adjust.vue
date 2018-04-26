<template>
  <div class="nuxt-border">
    <section class="container">
    <div class="container-left-pc">
      <div class="container-left-bg"></div>
      <div class="container-left-message">
        <div class="container-left-pic-border">
          <img class="container-left-pic" src="~assets/favicon.png" alt="">
        </div>
        <div class="container-left-name">keenjaan</div>
        <p class="container-left-introduction">一个爱运动的程序员</p>
        <nuxt-link class="to-home-page" to="/">首页</nuxt-link>
        <div class="container-left-link-border">
          <a class="container-left-link" href="https://github.com/keenjaan" target="_blank">github主页</a>
          <a class="container-left-link" href="https://juejin.im/user/584aba29128fe1006c7d16c5" target="_blank">掘金主页</a>
          <a class="container-left-link" href="https://www.jianshu.com/u/4f7bfde3a60d" target="_blank">简书主页</a>
        </div>
      </div>
    </div>
    <div class="container-right-mobile">
      <div class="container-mobile-head">
        <div class="container-mobile-bg-border">
          <div>
            <div class="container-mobile-photo-border">
              <img class="container-left-pic" src="~assets/favicon.png" alt="">
            </div>
            <div class="container-moblie-name">keenjaan</div>
            <p class="container-mobile-introduction">
              <span>一个爱运动的程序员</span>
            </p>
            <nuxt-link class="to-home-page-mobile" to="/">首页</nuxt-link>
            <p class="container-mobile-link">
              <a class="container-mobile-link-item" href="https://github.com/keenjaan" target="_blank">github主页</a>
            </p>
            <p class="container-mobile-link">
              <a class="container-mobile-link-item" href="https://juejin.im/user/584aba29128fe1006c7d16c5" target="_blank">掘金主页</a>
            </p>
            <!-- <p class="container-mobile-link-bottom">
              <a class="container-mobile-link-item" href="https://www.jianshu.com/u/4f7bfde3a60d" target="_blank">简书主页</a>
            </p> -->
          </div>
        </div>
      </div>
      <div class="container-main-content">
        <nuxt/>
      </div>
    </div>
  </section>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
  padding: 0;
  color: #1a1a1a;
}

#__nuxt, #__layout {
  height: 100%;
}

.nuxt-border {
  height: 100%;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
    height: 100%;
    display: flex;
  }
  .container-left-pc {
    width: 300px;
    height: 100%;
  }
  .container-left-bg {
    height: 180px;
    background-color: #4d4d4d;
  }
  .container-left-message {
    width: 80%;
    margin: -68px auto 0;
  }
  .container-left-pic-border {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    background-color: #88acdb;
    margin: 0 auto;
    border: 5px solid #fff;
  }
  .container-left-pic {
    width: 100%;
    border-radius: 50%;
  }
  .container-left-name {
    margin: 0.8em auto;
    font-size: 30px;
    text-align: center;
  }
  .container-left-introduction {
    text-align: center;
    color: #999;
    font-size: 14px;
    line-height: 26px;
  }
  .container-left-link-border {
    text-align: center;
    margin: 30px auto;
  }
  .container-left-link {
    line-height: 40px;
    cursor: pointer;
    display: block;
    color: #696969;
    text-decoration: none;
  }
  .container-right-mobile {
    flex: 1;
    height: 100%;
    padding: 30px;
    background-color: #eaeaea;
    overflow: auto;
  }
  .container-mobile-head {
    display: none;
    height: 350px;
    width: 100%;
  }

@media screen and (max-width: 800px) {
  .container-left-pc {
    display: none;
  }
  .container-mobile-head {
    display: block;
  }
  .container-right-mobile {
    padding: 0;
  }
}

.container-mobile-bg-border {
  width: 100%;
  height: 110px;
  background-color: #4d4d4d;
  padding-top: 10px;
}
.container-mobile-photo-border {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  border: 5px solid #fff;
  margin: 0 auto;
  background-color: #88acdb;
}
.container-moblie-name {
  margin-top: 10px;
  font-size: 30px;
  color:#424242;
  text-align: center;
  font-weight: 500;
}
.container-mobile-introduction {
  font-size: 14px;
  text-align: center;
  margin: 10px auto;
  color: #999;
}

.introduction-symol {
  font-size: 60px;
}
.container-mobile-link {
  text-align: center;
  line-height: 40px;
}
.container-mobile-link-bottom {
  text-align: center;
  line-height: 40px;
}
.container-mobile-link-item {
  text-decoration: none;
  color: #498ade;
}
.container-main-article {
  width: 100%;
  background-color: #fff;
}
.to-home-page {
  line-height: 40px;
  cursor: pointer;
  display: block;
  color: #696969;
  text-decoration: none;
  text-align: center;
  margin-top: 20px;
}
.to-home-page-mobile {
  line-height: 40px;
  cursor: pointer;
  display: block;
  color: #696969;
  text-decoration: none;
  text-align: center;
}
</style>
