# vue-chat

> this is a tiny real time communication app.

## 安装

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

```
----

## 使用

1. 打开两个chrome浏览器标签页
2. 在两个地址栏输入 `127.0.0.1:8081` 回车，这时候就建立了两个客户端连接A和B
3. 在A客户端中打开 **群聊测试** ，发送任意条信息
4. 观察客户端B，新消息将会推送至客户端B的首页，并且记录信息条数
5. 两个客户端同时打开 **群聊测试** ，即可实现即时通讯

## 注意

1. 使用chrome手机模拟器可获得最佳用户体验
2. 如果想使用手机浏览器或其他设备访问，请将 **APP.vue** **chat.vue** 和 **dialogue.vue** 文件里 **http://localhost:8081** 中的 **localhost** 替换为你的本机IP地址


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
