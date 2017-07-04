<template>
	<div class="chatPanel">
		<div class="changeWay">
			<span class="iconfont icon-dialogue-voice"></span>
		</div>
		<div class="chatWay">
			<input type="text" 
				class="inputWay" 
				v-model="messages" 
				@focus="wakeupKeyBoard" 
				@keyup.enter="sendMsg">
		</div>
		<div class="chatPlus">
			<span class="sticker iconfont icon-dialogue-smile"></span>
			<span class="iconfont icon-dialogue-more"></span>
		</div>
	</div>
</template>

<script>
import io from 'socket.io-client'

export default {
	props: ['socket'],
	data() {
		return{
			messages: ''
		}
	},
	methods: {
		wakeupKeyBoard() {
			//软键盘唤醒后页面滚动到顶部
			scrollTo(0,document.body.scrollHeight)
		},
		sendMsg() {

			//将输入信息推送给后台，后台再广播给其他用户
			this.socket.emit('sendMsg',{userName:'大热狗狗',content:this.messages,userType: 'others'})
			//将输入信息传递给父组件，父组件接收到新信息后显示到聊天面板
			this.$emit('showMsg',{content:this.messages,userType: 'self',userName: '大热狗狗'})
			this.messages = ''
		}
	},
	mounted() {
		
	}
}
</script>

<style>
.chatPanel {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	display: flex;
	flex-direction: row;
	z-index: 3;
	height: 3.4rem;
	line-height: 3.4rem;
	background: #f7f7f7;
    border-top: 1px solid #ddd;		
}
.chageWay {
	padding-left: 5px;
}
.chatWay {
	flex: 1;
	height: 100%;
	padding: 10px 5px;
}
.chatPlus {
	padding-right: 5px;
}
.inputWay {
	align-items: center;
	border-radius: 6px;
	overflow: hidden;
	padding: 0 10px;
	width: 200%;
	height: 200%;
	border: 1px solid #7d7e83;
	transform: scale(.5);
	transform-origin: 0 0;
	font-size: 30px;
}
</style>