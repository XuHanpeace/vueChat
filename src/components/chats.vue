<template>
	<div class="contentBox">
		<div :class="[{'isDialogue':isDialogue},'effect']">
			<search></search>
			<ul class="chatList">
				<template v-for="item in chatsList">
					<li class="chatsItems" @click="showDialogue(false,item.name)">
						<div class="item">
							<div class="bar-left">
								<img :src="item.portrait" alt="">
							</div>
							<div class="bar-middle">
								<p class="nickName">{{item.name}}</p>
								<p class="lastMsg">{{item.lastMsg}}</p>
							</div>
							<p class="chat-bar-right">{{item.lastTime}}</p>
						</div>
					</li>
				</template>
			</ul>
		</div>
		
		<transition name="slide-in">
			<router-view keep-alive :title="curName"></router-view>
		</transition>
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
						portrait: require("../assets/chizza.jpg"),
						name: "love magic",
						lastMsg: "see u next time",
						lastTime: "19:40"
					},
					{
						portrait: require("../assets/durant.jpg"),
						name: "OKC",
						lastMsg: "god of death is comming",
						lastTime: "19:40"
					},
					{
						portrait: require("../assets/lobster.jpg"),
						name: "大闸蟹爱吃",
						lastMsg: "昨天吃了蒜蓉粉丝大闸蟹",
						lastTime: "19:40"
					}
				],
				curName : ''	//保存聊天名称，传递给router-view

			}
		},
		computed:{
			isDialogue(){
				return this.$route.path.indexOf('dialogue') > 1 ? true : false
			}
		},
		methods: {
			showDialogue(isHomePage,name){
				//将点击的聊天对象的名字赋值给curName
				this.curName = name 
				//改变state中origin值为VueChat 
				this.$store.state.basicInfo.origin = 'VueChat'
				//触发vuex mutation中的showDialogue方法
				this.$store.commit('showDialogue',{isHomePage,name})
				this.$router.push('/chats/dialogue')
			}

		}
	}
</script>

<style scope>
.chatsItems {
	color: #999;
	list-style: none;
	border-bottom: 1px solid #dadada;
}
.chatsItems img,.img {
	width: 3.2em;
	border-radius: 4px;
}
.chatsItems .img {
	position: relative;
}
.chatsItems .item {
	width: 100%;
	padding: .4em 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.chatsItems .content {
	flex:1;
	text-align: left;
	margin-left: 10px;
}
.chatsItems .nickName {
	font-size: 1.2em;
	color: #333;
}
.chatsItems .bar-middle {
	line-height: 1.5rem;
}
.chatsItems .bar-left {
	padding-left: 0;
}
.lastTime {
	padding-right: 3px
}

ul.chatList {
	background-color: #fff;
	padding-left: .4rem;
}
.isDialogue{
	transform: translate3d(-30%, 0, 0);
}
.effect{
	opacity: 1;
	transition: .3s all ease;
}
.chat-bar-right {
	padding-right: .4em;
}
.slide-in-enter-active {
  transition: all .33s ease;
}
.slide-in-leave-active {
  transition: all .33s ease;
}
.slide-in-enter, .slide-in-leave-active {
  transform: translateX(99.9%);
}



	
	
</style>