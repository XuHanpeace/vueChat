<template>
	<div :class="[content.split?isSplit:noSplit,{'isAlbum':content.title === 'Album'}]">
		<div class="bar-left">
			<img v-if="content.icon !== null" :src="content.icon" class="mission-img">
			<span v-else>{{content.title}}</span>
		</div>

		<!-- 判断是否Icon的 -->
		<div v-if="content.icon !== null" class="bar-middle">{{content.title}}</div>
		<div v-else class="bar-middle">
			<!-- 如果当前是相册 -->
			<span v-if="content.title !== 'Album'">{{content.describe}}</span>
			<div v-else class="imgBox">
				<template v-for="imgSrc in content.describe">
					<img :src="imgSrc" alt="">
				</template>
			</div>
		</div>

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
		mounted(){}
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

.bar-middle {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.bar-right{
	width: 1em;
	line-height: 2.5em;
	padding-right: 2em;
}

.isAlbum {
	height: 5em;
}
.isAlbum .bar-right {
	line-height: 5em;
}
.bar-middle img {
	width: 3.5em;
	height: 3.5em;
}
.imgBox {
	display: flex;
	justify-content: space-around;
}
	
</style>