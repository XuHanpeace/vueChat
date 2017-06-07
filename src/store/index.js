import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import event from './event' //event模块暴露的是event对应的mutation/states/getter

export default new Vuex.Store({
	modules: {
		event
	}
});