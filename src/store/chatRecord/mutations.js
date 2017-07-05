import * as func from '../localstorage'

export default {
	keepRecord(states, obj) {
			states = obj

		},
		clearRecord(states) {
			func.keepRecord.remove()
			states = []
		}
}