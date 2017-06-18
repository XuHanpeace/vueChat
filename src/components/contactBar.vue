<template>

	<div>
		<template v-for="(item,index) in details">
			<div class="contactBar" @click="showPersonality(false,item.initials,index)">
				<div class="bar-left">
					<img class="contact-img" :src="item.icon" alt="">
				</div>
				<p class="bar-middle">{{item.nickName}}</p>
			</div>
		</template>
	</div>
	
</template>

<script>
	export default {
		props:['details'],
		data(){
			return {

			}
		},
		methods: {
			showPersonality(isHome,initials,index) {
				//触发mutation showPersonality方法
				this.$store.commit('showPersonality',{isHome,initials,index})
				//改变store中origin的值为Contacts
				this.$store.state.basicInfo.origin = 'Contacts'
				this.$router.push('/contact/personality')
			}
		},
		mounted(){
		}
	}
</script>

<style>
	.contactBar{
		width: 100%;
		height: 3.5em;
		display: flex;
		flex-direction: row;
		background-color: #fff;
		border-bottom: 1px solid #ddd;
	}
	.contact-img{
		width:2.4em;
	}
	p.bar-middle{
		line-height: 3.5em
	}
</style>
