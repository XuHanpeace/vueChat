<template>
<div>
  <header>VueChat</header>
  <footer>
    <foot-item></foot-item>
  </footer>
</div>
    
</template>

<script>
import footItem from "./components/footItem"
export default {
  components: {
    footItem
  },
  data (){
    return{

    }
  }
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  height: 100%;
  margin: 0;
  padding: 0;
}

header {
  height: 7rem;
  width: 100%;
  line-height: 7rem;
  font-size: 4rem;
  position:absolute;
  top: 0;
  background-color: #38373d;
}
footer {
  width: 100%;
  height: 6rem;
  position: absolute;
  bottom: 0;
  background-color: #f7f7f7;
}
</style>
