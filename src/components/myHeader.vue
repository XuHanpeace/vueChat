<template>
	<div class="my-header normal-header">
		<go-back :getBack="origin"></go-back>
		<div class="dialogue-title">
			<span>{{title}}</span>
		</div>
	</div>
</template>

<script>
import goBack from './goBack'

export default {
	components: {
		goBack
	},
	props:['title'],
	data() {
		return {

		}
	},
	computed: {
		origin() {
			return this.$store.state.basicInfo.origin
		}
	},
	mounted(){}
}
</script>

<style>
.my-header {
	width: 100%;
	height: 100%;
	opacity: 1;
	background: linear-gradient(180deg,#303036,#3c3b40);
	transition: all .55s ease;
}
.normal-header {
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
.dialogue-title {
	line-height: 3.4rem
}
	
</style>