<template>
	<div class="icons">
		<template v-for="(item,index) in options">
			<div>
				<router-link :to="{path:item.goto}" :class="{isSelected: index === selected}" >
					<icon :name="item.name" scale="3"></icon>
					<p>{{item.content}}</p>
				</router-link>
			</div>
		</template>
	</div>
</template>


<script>
	import Icon from 'vue-svg-icon/Icon.vue';
	export default {
		components: {
			Icon
		},
		data(){
			return {
				options: [
					{name:'chats',content:'Chats',goto:'chats'},
					{name:'contacts',content:'Contacts',goto:'contact'},
					{name:'discover',content:'Discover',goto:'discover'},
					{name:'me',content:'Me',goto:'profile'}
				]
			}
		},
		computed:{
			selected(){		//根据path判断选定哪个底部菜单
				let path = this.$route.path,
					selectedIdx;
				switch(path){
					case '/chats':
						selectedIdx = 0
						break
					case '/contact':
						selectedIdx = 1
						break
					case '/discover':
						selectedIdx = 2
						break
					case '/profile':
						selectedIdx = 3
						break
					default:
						selectedIdx = 0
				}
				return selectedIdx
			}
		},
		methods: {
			select(index){
				this.selected = index;
			}
		}
	}
</script>
<style>
.icons {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	text-align: center;
	height: 100%;
	width: 100%;
}
.icons  a{
	text-align: center;
	margin-top: 10px;
	color: #999;
	width: 10em;
}
.icons .isSelected {
	color: #1aac19;
}
.icons  p {
	text-align: center;
	margin:0;
}
.router-link-active {
    text-decoration: none;
    outline: none;
}

	
</style>