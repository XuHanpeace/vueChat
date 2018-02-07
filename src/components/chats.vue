<template>
	<div class="contentBox">
		<div :class="[{'isDialogue':isDialogue},'effect']">
			<search></search>
			<ul class="chatList">
				<template v-for="item in chatsList">
					<li class="chatsItems" @click="showDialogue(false,item.name)">
						<div class="item">
							<div class="bar-left">
								<i class="msgTip" v-if="item.type === 'groupChat' && msgNum !== 0">{{msgNum}}</i>
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
	import io from 'socket.io-client'

	export default {
		components:{
			search
		},
		data () {
			return{
				chatsList: [
					{
						portrait: require("../assets/group.jpg"),
						type: "groupChat",
						name: "群聊测试",
						lastMsg: "be my guest",
						lastTime: "yesterday"
					},
					{
						portrait: require("../assets/logo.png"),
						type: "normal",
						name: "author of vue",
						lastMsg: "see u next time",
						lastTime: "19:40"
					},
					{
						portrait: require("../assets/chizza.jpg"),
						type: "normal",
						name: "love magic",
						lastMsg: "see u next time",
						lastTime: "19:40"
					},
					{
						portrait: require("../assets/durant.jpg"),
						type: "normal",
						name: "OKC",
						lastMsg: "god of death is comming",
						lastTime: "19:40"
					},
					{
						portrait: require("../assets/lobster.jpg"),
						type: "normal",
						name: "大闸蟹爱吃",
						lastMsg: "昨天吃了蒜蓉粉丝大闸蟹",
						lastTime: "19:40"
					}
				],
				curName: '',	//保存聊天名称，传递给router-view
				msgNum: 0	//记录新消息数量
				
			}
		},
		computed:{
			isDialogue(){
				return this.$route.path.indexOf('dialogue') > 1 ? true : false
			}
		},
		methods: {
			showDialogue(isHomePage,name){
				this.msgNum = 0
				//将点击的聊天对象的名字赋值给curName
				this.curName = name 
				//改变state中origin值为VueChat 
				this.$store.state.basicInfo.origin = 'VueChat'
				//触发vuex mutation中的showDialogue方法
				this.$store.commit('showDialogue',{isHomePage,name})
				this.$router.push('/chats/dialogue')
			}

		},
		created() {
			const socket = io()

			let msgArr = []

			

			//接收后台推送的最新信息
			socket.on('postMsg', data => {
				//只有停留在主页的时候，才提示红圈新消息
				if(this.$route.path.indexOf('dialogue') < 0){
					if(this.msgNum > 99){
						this.msgNum = '...'
					}else {
						this.msgNum++ 
					}
				}
				
				//这里推送的消息仅仅体现在群聊中，待优化
				this.chatsList[0].lastMsg = data.content
				this.chatsList[0].lastTime = data.time

			})

			//接收后台推送的所有消息
			socket.on('newMsg', data => {

				msgArr.push(data)

				//TODO： 建立一个全局socket
				//this.$store.dispatch('keepRecord',msgArr)
				this.$store.state.chatRecord = msgArr
			})
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

.msgTip {
	position: absolute;
	font-style: initial;
	font-family: PingFang SC, Hiragino Sans GB, Arial, Microsoft YaHei, Helvetica;
	right: -9px;
	top: -5px;
	z-index: 2;
	padding: 0 4px;
	width: auto;
	min-width: 18px;
	height: 18px;
	line-height: 18px;
	border-radius: 9px;
	color: #ffffff;
	text-align: center;
	font-size: 14px;
	background-color: #f43531;
}



	
	
</style>