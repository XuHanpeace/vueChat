<template>
<div id="app">
    <header>
        <go-back v-if="!navMode"></go-back>
        <span>VueChat</span>
    </header>
    <section class="container">
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
            console.log(this.$store.state.event.navMode)
            return this.$store.state.event.navMode
        }
    },
    methods: {
        
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
      color: #fff;
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
    height: 3em;
    line-height: 3em;
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
}
hr {
    margin: 0;
}
section.container{
    padding-top: 3em;
    padding-bottom: 3em;
    overflow: hidden;
    position: relative;
    height: 100%;
}
#app,body,html{
    height: 100%;
    overflow: hidden;
}


</style>
