<template>
	<div :class="[content.split?isSplit:noSplit]">
		<div class="bar-left">
			<img class="mission-img" :src="content.icon">
		</div>
		<div class="bar-middle">{{content.title}}</div>
		<div class="bar-right">
			<div class="more"></div>
		</div>
	</div>
</template>

<script>
	export default {
		props:['content'],
		data(){
			return{
				isSplit:'bar-split bar',
				noSplit: 'bar'
			}
		},
		computed:{

		},
		mounted(){
			//console.log(content)
		}
	}
</script>

<style>
	.bar{
		display: flex;
		flex-direction: row;
		height: 2.5em;
		width: 100%;
		background-color: #fff;
		border-bottom: 1px solid #ddd;
	}
	.bar-split{
		margin-top: 1.3em;
	}
	.mission-img{
		width: 1.4em
	}
	.bar-right{
		width: 1em;
		line-height: 2.5em;
		padding-right: 2em;
	}
	.more:after{
		content: " ";
		display: inline-block;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
		height: 6px;
		width: 6px;
		border-width: 2px 2px 0 0;
		border-color: #c8c8cd;
		border-style: solid;
		position: relative;
	}
</style>