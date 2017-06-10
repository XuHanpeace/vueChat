import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import discover from '../discoverInfo.js'
import profile from '../profileInfo.js'

const state = {
	navMode: true,
	discover,
	profile
}

export default {
	state,
	getters,
	mutations
}