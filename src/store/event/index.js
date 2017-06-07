import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import mutations from './mutations.js'

const state = {
	navMode: true
}

export default {
	state,
	getters,
	mutations
}