import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

import * as func from '../localstorage'

const state = []

export default {
	state,
	getters,
	actions,
	mutations
}