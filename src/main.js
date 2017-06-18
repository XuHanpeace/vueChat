// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './App'
import Vuex from 'vuex'
import VRouter from 'vue-router'

import store from './store/index'

/*router components*/
import chats from "./components/chats"
import dialogue from "./components/dialogue"
import Contact from './components/contact'
import Discover from './components/discover'
import Chats from './components/chats'
import Profile from './components/profile'
import personality from './components/personality'

let router = new VRouter({ //实例化一个vue router
	routes: [{
		path: '/',
		redirect: '/chats'
	}, { //创建路由映射表
		path: '/chats',
		component: Chats,
		children: [{
			path: '/chats/dialogue',
			component: dialogue
		}]
	}, {
		path: '/contact',
		component: Contact,
		children: [{
			path: '/contact/personality',
			component: personality
		}]
	}, {
		path: '/discover',
		component: Discover
	}, {
		path: '/profile',
		component: Profile
	}]
});

Vue.use(Vuex);
Vue.use(VRouter);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<Layout/>',
	components: {
		Layout,
		chats,
		dialogue,
		Chats,
		Contact,
		Profile,
		Discover
	}
})