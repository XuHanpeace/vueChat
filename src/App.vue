<template>
<div id='app'>
    <header :class="[{'isDialogue':isDialogue},'effect']">
        <my-header :title='mainTitle'></my-header>
    </header>
    <section :class="chatPage ? 'chatContainer container': 'container'">
        <router-view keep-alive></router-view>
    </section>
    <footer :class="[{'isDialogue':isDialogue},'effect']">
        <foot-nav></foot-nav>
    </footer>
</div>
    
</template>

<script>
import footNav from './components/footItem'
import goBack from './components/goBack'
import myHeader from './components/myHeader'

import io from 'socket.io-client'

export default {
    components: {
        footNav,
        goBack,
        myHeader
    },
    data (){
        return{
            //navMode: true
        }
    },
    computed: {
        navMode(){//从store获取nnavMode值
            return this.$store.state.basicInfo.navMode
        },
        chatPage(){ //判断当前path
            return this.$route.path.indexOf('chats') > 0 
        },
        mainTitle(){    //根当前path决定顶部title值
            let path = this.$route.path,
                title = '',
                reg = /\/(\S*)\//

            //用正则截取一级路由做main title的判断
            //防止在切换二级路由时，main tile走到default条件下
            if(path.match(reg) !== null){
                path = path.match(reg)[0]
                path = path.substring(0,path.length - 1)
            }

            switch(path){
                case '/chats':
                    title = 'VueChat'
                    break
                case '/contact':
                    title = 'Contact'
                    break
                case '/discover':
                    title = 'Discover'
                    break
                case '/profile':
                    title = 'Profile'
                    break
                default:
                    title = 'VueChat'
            }
            return title
        },
        isDialogue(){
            return this.$route.path.lastIndexOf('/') > 0 ? true : false
        }
    },
    created() {
        const socket = io.connect('http://192.168.23.3:8081/#/chats')

        //这里用来统计接收后台推送来的消息数目
        // socket.on('newMsg', data => {
        //     console.log(data)

        //     socket.emit('shit',{hi: 'this is shit'})
        // })
    }
}
</script>

<style>
@import url('assets/css/fontface.css');
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #333;
      height: 100%;
      font-size: 15px;
}
a{
    text-decoration: none;
}

header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 3;
    height: 3.4rem;
    line-height: 3.4rem;
    font-size: 19px;
    color: #fff;
    text-align: center;
}
footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    background-color: #f7f7f7;
    padding-top: 2px;
    border-top: 1px solid #ddd;
}
hr {
    margin: 0;
}
section.container{
    position: relative;
    padding-top: 3.4rem;
    padding-bottom: 3.4rem;
    height: 100%;
    overflow: hidden;
    background-color:#f0eff5; 
}
section.chatContainer{
    background-color: #fff;
}
#app,body,html{
    height: 100%;
    overflow: hidden;
}
.contentBox {
    height: 100%;
    overflow: auto;
}
.bar-middle{
    flex: 1;
    line-height: 2.5rem;
    text-align: left;
    padding-left: .7rem;
}
.bar-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
    position: relative;
}

.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .3s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.isDialogue span {
    opacity: 0;
}
.goBack {
    z-index: 999;
}
input:focus {
    outline: none;
}



</style>
