export default {
	changeNavMode(states, info) { //改变store中isHomePage值的方法
		states.isHomePage = info.isHomePage;
	}
}