<template>
	<div class="profile">
		<my-header title="Profile"></my-header>
		<div class="profile-body">
			<my-profile :profile="getProfile"></my-profile>
			
			<template v-for="(item,index) in getDetails">
				<mission-bar :content="item"></mission-bar>
			</template>
		</div>
	</div>
</template>

<script>
import myHeader from './myHeader'
import myProfile from './myProfile'
import missionBar from './missionBar'
export default {
	components: {
		myHeader,
		myProfile,
		missionBar
	},
	data() {
		return {

		}
	},
	computed: {
		getProfile() {
			return this.$store.state.basicInfo.currentProfile
		},
		getDetails() {
			let detailObj, setRemark, region, album, more = {}
			//set remark和more都是不变的
			setRemark = {
				icon: null,
				title: 'Set Remark and Tag',
				describe: '',
				split: true
			}
			more = {
				icon: null,
				title: 'More',
				describe: '',
				split: false
			}
			//region和album数据都是可变的，所以要从store里面取
			region = this.getProfile.region
			album = this.getProfile.album

			detailObj = {
				setRemark,
				region,
				album,
				more
			}

			return detailObj
		}
	},
	mounted() {
			console.log(this.getProfile)
	}
}
</script>

<style>
.profile {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 66;
}
.profile-body {
	width: 100%;
	height: 100%;
	background-color: #efeff4;
	padding-top: 3.4rem;
}


</style>