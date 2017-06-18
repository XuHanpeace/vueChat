<template>
	<div class="my-profile">
		<div class="profile-left">
			<img :src="profile.icon" alt="">
		</div>
		<div class="profile-middle">
			<p class="nickName">
				<span>{{profile.nickName}}</span>
				<span v-if="hasGenderIcon">
					<img :src="genderIcon" alt="">
				</span>
			</p>
			<p class="identity">WeChat ID: {{profile.identity}}</p>
		</div>
		<div class="profile-right">
			<div class="more"></div>
		</div>
	</div>
</template>


<script>
	export default{
		props: ['profile'],
		data(){
			return{
				hasGenderIcon: false
			}
		},
		computed: {
			genderIcon() {
				let male = require('../assets/contact_male.png'),
					female = require('../assets/contact_female.png')
				return this.profile.gender === 'male'? male : female
			}
		},
		mounted() {
			if(this.profile.gender !== null){
				this.hasGenderIcon = true
			}
		}
	}
</script>

<style>
.my-profile{
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 5.5em;
	background-color: #fff;
	border-top: 1px solid #ddd;
	border-bottom: 1px solid #ddd;
	margin: 1em 0 1.5em 0;
}
.my-profile .profile-middle{
	flex: 1;
	text-align: left;
	padding-left: 1em;
	font-size: 1rem
}
.my-profile .profile-middle .nickName{
	line-height: 3em;
}
.my-profile .profile-right{
	line-height: 5.5em;
	width: 0;
	padding-right: 2em;
}
.profile-left{
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 1em;
}
.profile-left img {
	width: 4em;
	border-radius: 10px;
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

.nickName img {
	width: 18px;
	vertical-align: text-bottom;
}
</style>