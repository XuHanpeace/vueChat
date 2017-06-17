<template>
	<div>
		<my-profile :profile="myProfile"></my-profile>
		<template v-for="(item,index) in contentInfo">
			<mission-bar :content="item"></mission-bar>
		</template>
	</div>
	

</template>

<script>
	import missionBar from './missionBar'
	import myProfile from './myProfile'
	export default {
		components:{
			missionBar,
			myProfile
		},
		data(){
			return{
				content:{}
			}
		},
		computed: {
			contentInfo(){
				return this.$store.state.basicInfo.profile.profileInfo
			},
			myProfile(){
				return this.$store.state.basicInfo.profile.myProfile
			}
		},
		mounted(){
		}
	}
</script>