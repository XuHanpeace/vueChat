import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import basicInfo from './basic' //basic模块暴露的是basic对应的mutation/states/getter

export default new Vuex.Store({
	modules: {
		basicInfo
	}
});