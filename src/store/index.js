import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import basicInfo from './basic' //basic模块暴露的是basic对应的mutation/states/getter
import chatRecord from './chatRecord' //用来记录聊天记录

export default new Vuex.Store({
	modules: {
		basicInfo,
		chatRecord
	}
});