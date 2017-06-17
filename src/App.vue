<template>
<div id='app'>
    <header :class="[{'isDialogue':isDialogue},'effect']">
       <!--  <transition name="fade">
            <go-back v-if="!navMode" class="goBack"></go-back>
        </transition> -->
        <my-header :title='mainTitle'></my-header>
        <!-- <span>{{mainTitle}}</span> -->
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
                title;
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
            return this.$route.path.indexOf('dialogue') > 1 ? true : false
        }
    },
    mounted() {
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
    padding-left: 1rem;
}
.bar-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
}

.fade-enter-active {
  transition: all .5s ease;
}
.fade-leave-active {
  transition: all .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.goBack {
    z-index: 999;
}
input:focus {
    outline: none;
}

</style>
