<template>
	<div class='dialogue'>
		<my-header :title='title'></my-header>
		<div class='dialogue-body' >
			<div id='diaBody'>
				<template v-for='(item,index) in msgList'>
					<chat-box :chatContent='msgList[index]'></chat-box>
				</template>
			</div>
			
			
		</div>
		<chat-panel class='dialogue-footer' v-on:showMsg='showMsg' :socket='socket'></chat-panel>
	</div>
</template>

<script>
import myHeader from './myHeader'
import chatPanel from './chatPanel'
import chatBox from './chatBox'

import io from 'socket.io-client'

export default {
	components: {
		myHeader,
		chatPanel,
		chatBox
	},
	props:['title'],
	data() {
		return {
			socket: null,
			msgList: []	//存放聊天信息
			
		}
	},
	methods: {
		showMsg(contenObj) {
			if(contenObj.content.length > 0) {
				this.msgList.push(contenObj)
			}

		}
	},
	computed: {
		
	},
	created() {
		const socket = io.connect('http://192.168.23.3:8081/#/chats/dialogue')

		//建立socket连接，接收msgList信息
		this.socket = socket
		
		socket.on('newMsg', data => {
			this.msgList.push(data)
		})

		
	},
	updated() {
		let diaBody = document.getElementById('diaBody')
		//聊天内容渲染到视图后再进行滚动
		diaBody.scrollTop = diaBody.scrollHeight
	},
	mounted() {	
		
		this.msgList = this.$store.state.chatRecord
	},
	beforeDestroy() {
		//退出聊天后，先断开socket连接，再保存聊天记录到vuex
		this.socket.disconnect()
		//this.$store.state.chatRecord = this.msgList
		this.$store.dispatch('keepRecord',this.msgList)
		//this.$store.dispatch('clearRecord')
	}
}
</script>

<style>

.dialogue-body {
	width: 100%;
	height: 100%;
	padding: 3.4rem 0;
	overflow-y: auto;
}
.dialogue {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 6;
	background-color: #efeff4;
}
#diaBody {
	height: 100%;
	overflow-y: auto;
}


</style>