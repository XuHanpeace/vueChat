<template>
	<div class="dialogue">
		<my-header class="dialogue-header" :title="title"></my-header>
		<div class="dialogue-body"></div>
		<chat-panel class="dialogue-footer"></chat-panel>
	</div>
</template>

<script>
import myHeader from './myHeader'
import chatPanel from './chatPanel'

export default {
	components: {
		myHeader,
		chatPanel
	},
	props:['title'],
	data() {
		return {

		}
	}
}
</script>

<style scope>
.dialogue-header {
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
.dialogue-body {
	width: 100%;
	height: 100%;
	padding: 3.4rem 0;
}
.dialogue {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 6;
	background-color: #efeff4;
}


</style>