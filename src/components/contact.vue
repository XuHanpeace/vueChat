<template>
	<div class="contentBox">
		<search :class="[{'isDialogue':isDialogue},'effect']"></search>
		<div :class="[{'isDialogue':isDialogue},'effect']">
			<template v-for="item in contactDetails">
				<div class="initials" v-if="!(item[0].initials =='default')">{{item[0].initials}}</div>
				<contact-bar :details="item"></contact-bar>
			</template>
		</div>
		<transition name="slide-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import search from './search'
	import contactBar from './contactBar'

	export default {
		components:{
			search,
			contactBar
		},
		data(){
			return {

			}
		},
		method: {
			
		},
		computed: {
			contactDetails(){
				return this.$store.state.basicInfo.contactList.list
			},
			isDialogue() {
				return this.$route.path.indexOf('personality') > 0 ? true : false;
			}
		},
		mounted(){}
	}
</script>

<style>
	.initials{
		text-align: left;
		padding-left:1em;
		color:#666;
	}
</style>
