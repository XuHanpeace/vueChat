<template>
	<div :class='chatContent.userType'>
		<p class='user-name'>{{chatContent.userName}}</p>
		<div class='chat-content'>
			<span>{{chatContent.content}}</span>
		</div>
	</div>
</template>

<script>

export default {
	props: ['chatContent'],
	data() {
		return {
		
		}
	},
	computed: {
		isMyself(){
			// return chatContent.user === 'self'? 'self-box' : 'others-box'
		}
	},
	mounted() {

	}
}
</script>

<style>
.self {
	padding: 0 .7em 1em 0;
}
.others {
	padding: 0 0 1em .7em;
}
.self div,.self p {
	text-align: right;
}
.others div,.others p {
	text-align: left;
}	
.self .chat-content span {
	background-color: #a2e65b;
}
.others .chat-content span {
	background-color: #fff
}
.chat-content span{
	line-height: 2rem;
	padding: 3px 10px;
	border: 1px solid #eee;
	border-radius: 5px;
	display: inline-block;
	height: 100%;
	max-width: 75%;
	word-wrap: break-word;
}

</style>