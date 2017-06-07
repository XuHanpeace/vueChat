export default {
	changeNavMode(states, info) { //改变store中navMode值的方法
		console.log(info)
		states.navMode = info.isNav;
	}
}