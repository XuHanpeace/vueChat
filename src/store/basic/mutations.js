export default {
	showDialogue(states, param) {
			//改变store中isHomePage
			states.isHomePage = param.isHomePage
		},
		showPersonality(states, param) {
			states.isHomePage = param.isHome

			//将选中的用户信息保存到current profile中
			states.currentProfile = states.contactList.list[param.initials][param.index]

			console.log(states.currentProfile.icon)
		}
}