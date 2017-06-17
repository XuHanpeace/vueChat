<template>
	<div class="contentBox">
		<search></search>
		<template v-for="item in contactDetails">
			<div class="initials" v-if="!(item[0].initials =='default')">{{item[0].initials}}</div>
			<contact-bar :details="item"></contact-bar>
		</template>
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
		computed: {
			contactDetails(){
				return this.$store.state.basicInfo.contactList.list
			}
		},
		mounted(){
			console.log(this.$store.state.basicInfo.contactList.list)
		}
	}
</script>

<style>
	.initials{
		text-align: left;
		padding-left:1em;
		color:#666;
	}
</style>
