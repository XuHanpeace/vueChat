export default {
	//保存聊天记录
	keepRecord: ({
		commit
	}, param) => commit('keepRecord', param),
	clearRecord: (({
		commit
	}) => commit('clearRecord'))
}