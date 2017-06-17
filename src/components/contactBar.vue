<template>

	<div>
		<template v-for="(item,index) in details">
			<div class="contactBar">
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
