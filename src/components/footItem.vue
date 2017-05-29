<template>
	<div class="icons">
		<template v-for="(item,index) in options">
			<div :class="{isSelected: index === selected}" @click="select(index)">
				<icon :name="item.name" scale="5"></icon>
				<p>{{item.content}}</p>
			</div>
			
		</template>
		<!-- <div class="{active: selected}">
			<icon name="chats" scale="5"></icon>
			<p>Chats</p>
		</div>
		<div class="active">
			<icon name="contacts" scale="5"></icon>
			<p>Contacts</p>
		</div>
		<div>
			<icon name="discover" scale="5"></icon>
			<p>Discover</p>
		</div>
		<div>
			<icon name="me" scale="5"></icon>
			<p>me</p>
		</div> -->
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
					{name:"chats",content:"Chats"},
					{name:"contacts",content:"Contacts"},
					{name:"discover",content:"Discover"},
					{name:"me",content:"Me"}
				],
				selected :0
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
		border-top: 1px solid #ddd;

	}
	.icons div {
		text-align: center;
		margin-top: 20px;
		color: #999;
		width: 10em;
	}
	.icons div.isSelected {
		color: #1aac19;
	}
	.icons div p {
		font-size: 1.4em;
		text-align: center;
		margin:0;
	}




	@font-face {font-family: "iconfont";
	  src: url('../fonts/font_cwizrf1r73krzfr.eot?t=1496070256677'); /* IE9*/
	  src: url('../fonts/font_cwizrf1r73krzfr.eot?t=1496070256677#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('../fonts/font_cwizrf1r73krzfr.woff?t=1496070256677') format('woff'), /* chrome, firefox */
	  url('../fonts/font_cwizrf1r73krzfr.ttf?t=1496070256677') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
	  url('../fonts/font_cwizrf1r73krzfr.svg?t=1496070256677#iconfont') format('svg'); /* iOS 4.1- */
	}

	.iconfont {
	  font-family:"iconfont" !important;
	  font-size:16px;
	  font-style:normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}

	.icon-zuo:before { content: "\e63c"; }

	.icon-huanj-01:before { content: "\e644"; }

	.icon-add:before { content: "\e6df"; }

	.icon-addressbook_fill:before { content: "\e6e2"; }

	.icon-addressbook:before { content: "\e6e3"; }

	.icon-close:before { content: "\e6e9"; }

	.icon-interactive_fill:before { content: "\e704"; }

	.icon-interactive:before { content: "\e705"; }

	.icon-mine:before { content: "\e70e"; }

	.icon-mine_fill:before { content: "\e70f"; }

	
</style>