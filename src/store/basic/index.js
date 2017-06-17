import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import discover from '../discoverInfo.js'
import profile from '../profileInfo.js'
import contactList from '../contactList.js'

const state = {
	isHomePage: true,
	discover,
	profile,
	contactList
}

export default {
	state,
	getters,
	mutations
}