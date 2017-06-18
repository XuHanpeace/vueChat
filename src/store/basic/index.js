import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import discover from '../discoverInfo.js'
import profile from '../profileInfo.js'
import contactList from '../contactList.js'


const state = {
	isHomePage: true, //true代表正在首页，header左侧不需要显示返回
	origin: 'goback', //该字符串渲染返回按钮内容，记录了从哪个一级路由跳转，默认显示goback
	currentProfile: {}, //保存用户信息
	discover,
	profile,
	contactList
}

export default {
	state,
	getters,
	mutations
}