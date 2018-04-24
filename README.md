### 说明

本项目是个人博客搭建项目之一，本来打算放在一个项目里的，但是放在一个项目里代码会比较乱，所以分开多个项目来管理。关于整个博客项目的搭建以及介绍可以参考我的这篇博文。



本项目为博客前端页面，其他项目地址：

[博客后台管理页面](https://github.com/keenjaan/blog-admin)

[博客后端接口及文档](https://github.com/keenjaan/blog-api)

# ssr

> Nuxt.js project

按照官方说明，nuxt 1.00基于node 8.00以上版本，所以本地要安装8.00以上版本。推荐使用nvm管理多版本node，切换版本非常方便。


## Build Setup

``` bash
# 克隆项目
$ git clone git@github.com:keenjaan/blog.git

#进入blog目录安装依赖
$ npm install # Or yarn install

# 启动热更新 at localhost:3333
$ npm run dev

# 生产环境打包和启动服务
$ npm run build
$ npm start

# 生产静态目录
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
