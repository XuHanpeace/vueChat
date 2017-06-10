<template>
	<div>
		<search></search>
		<ul class="chatList">
			<template v-for="item in chatsList">
				<li class="chatsItems" @click="changeNav(false,item.name)">
					<div class="item">
						<div class="img">
							<img :src="item.portrait" alt="">
						</div>
						<div class="content">
							<p class="nickName">{{item.name}}</p>
							<p class="lastMsg">{{item.lastMsg}}</p>
						</div>
						<div>
							<span class="lastTime">{{item.lastTime}}</span>
						</div>
					</div>
				</li>
				<hr>
			</template>
		</ul>
	</div>
	
</template>

<script>
	import search from './search'
	export default {
		components:{
			search
		},
		data () {
			return{
				chatsList:[
					{
						portrait: require("../assets/group.jpg"),
						name: "group chat",
						lastMsg: "be my guest",
						lastTime: "yesterday"
					},
					{
						portrait: require("../assets/logo.png"),
						name: "author of vue",
						lastMsg: "see u next time",
						lastTime: "19:40"
					},
					{
						portrait: require("../assets/logo.png"),
						name: "author of vue",
						lastMsg: "see u next time",
						lastTime: "19:40"
					},
					{
						portrait: require("../assets/logo.png"),
						name: "author of vue",
						lastMsg: "see u next time",
						lastTime: "19:40"
					},
					{
						portrait: require("../assets/logo.png"),
						name: "author of vue",
						lastMsg: "see u next time",
						lastTime: "19:40"
					}
				]
			}
		},
		methods: {
			changeNav(isNav,title){
				console.log(title)
				this.$store.commit('changeNavMode',{isNav,title})
			}
		}
	}
</script>

<style scope>
	.chatsItems{
		color: #999;
		list-style: none;
	}
	.chatsItems img,.img{
		width: 3.2em;
		border-radius: 10px;
	}
	.chatsItems .img {
		position: relative;
	}
	.chatsItems .item {
		width: 100%;
		padding-bottom: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.chatsItems .content{
		flex:1;
		text-align: left;
		margin-left: 10px;
	}
	.chatsItems .nickName {
		font-weight: bold;
		font-size: 1.3em;
		color: #333;
	}
	.chatsItems .lastMsg{
		padding-top: 3px;
	}
	ul.chatList {
		height: 100%;
		overflow: auto;
		background-color: #fff;
	}
	ul,li{
		padding: 6px;
	}
	
</style>