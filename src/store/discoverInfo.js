import scan from '../assets/discover/scan.png'
import firend_circle from '../assets/discover/firend-circle.png'
import shake from '../assets/discover/shake.png'
import drift_bottle from '../assets/discover/drift-bottle.png'
import nearby from '../assets/discover/nearby.png'
import games from '../assets/discover/games.png'

let discoverInfo = {
	moment: {
		title: 'Moment',
		icon: firend_circle,
		split: true //为true则有margin-bottom
	},
	scan: {
		title: 'Scan QR Code',
		icon: scan,
		split: true
	},
	shake: {
		title: 'Shake',
		icon: shake,
		split: false
	},
	drift: {
		title: 'Message in bottle',
		icon: drift_bottle,
		split: true
	},
	nearby: {
		title: 'People Nearby',
		icon: nearby,
		split: false
	},
	games: {
		title: 'Games',
		icon: games,
		split: true
	}
}
export default {
	discoverInfo
}