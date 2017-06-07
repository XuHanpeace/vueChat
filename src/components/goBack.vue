<template>
	<div class="goback" @click="goback">返回</div>
</template>

<script>
export default {
	data(){
		return{

		}
	},
	methods:{
		goback(){
			this.$store.state.event.navMode = true
		}
	}
}
</script>

<style>
div.goback {
	position: absolute;
	top: 1em;
	left: 1em;
	line-height: 1em;
}
</style>