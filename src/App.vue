<template>
<div id="app">
    <header>
        <go-back v-if="!navMode"></go-back>
        <span>VueChat</span>
    </header>
    <section :class="chatPage? 'chatContainer container': 'container'">
        <router-view></router-view>
    </section>
    <footer>
        
        <foot-nav v-if="navMode" ></foot-nav>
        <chat-func v-if="!navMode"></chat-func>
    </footer>
</div>
    
</template>

<script>
import footNav from './components/footItem'
import chatFunc from './components/chatFunc'
import goBack from './components/goBack'


export default {
    components: {
        footNav,
        chatFunc,
        goBack
    },
    data (){
        return{
            //navMode: true
        }
    },
    computed: {
        navMode: function(){
            return this.$store.state.event.navMode
        },
        chatPage: function(){
            return this.$route.path == '/chats'
        }
    },
    mounted() {
        console.log(this.$route.path)
    }
}
</script>

<style>
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
    background: linear-gradient(180deg,#303036,#3c3b40);
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


</style>
