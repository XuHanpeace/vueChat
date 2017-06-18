<template>
	<!-- <transition name="fade"> -->
		<div class="goback" @click="goback" v-if="!isHomePage">
			<span class="backSymbol"></span>
			<span>{{getBack}}</span>	
		</div>
	<!-- </transition> -->
</template>

<script>
export default {
	props: ['getBack'],
	data(){
		return {
			isHomePage : true
		}
	},
	computed: {
		
	},
	methods: {
		goback(){
			this.$store.state.basicInfo.isHomePage = true
			history.back()
		}
	},
	mounted() {
		//不把isHomePage写在计算属性是因为主页也用到了myHeader
		//他们共享计算属性，所以只能赋值给私有作用域的data model里面
		this.isHomePage = this.$store.state.basicInfo.isHomePage
	}
}
</script>

<style>
div.goback {
	position: absolute;
	left: 1em;
	line-height: 3.4rem;
	font-size: 1rem
}

.backSymbol:after {
	content: " ";
    display: inline-block;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    height: 10px;
    width: 10px;
    border-width:0 0 2px 2px;
    border-color: #fff;
    border-style: solid;
    position: relative;
}

/*.fade-enter-active {
  transition: all .5s ease;
}
.fade-leave-active {
  transition: all .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}*/
</style>