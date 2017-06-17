<template>
	<div class="my-header">
		<go-back></go-back>
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
	}
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
.dialogue-title {
	line-height: 3.4rem
}
	
</style>