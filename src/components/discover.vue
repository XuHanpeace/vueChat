<template>
	<div>
		<template v-for="(item,index) in contentInfo">
			<mission-bar :content="item"></mission-bar>
		</template>
	</div>
	

</template>

<script>
	import missionBar from './missionBar'
	export default {
		components:{
			missionBar
		},
		data(){
			return{
				content:{}
			}
		},
		computed: {
			contentInfo(){
				return this.$store.state.basicInfo.discover.discoverInfo
			}
		},
		mounted(){
			//console.log(this.$store.state.basicInfo.discover.discoverInfo)
		}
	}
</script>

<style>
	
</style>