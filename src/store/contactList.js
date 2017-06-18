import newFriend from '../assets/contacts/add-newfriend.png'
import tag from '../assets/contacts/contact_top-tag.png'
import groupChat from '../assets/contacts/group-chat.png'
import officialAccount from '../assets/contacts/official-account.png'
import chizza from '../assets/chizza.jpg'
import durant from '../assets/durant.jpg'
import frenchfries from '../assets/frenchfries.jpg'
import ice_cream from '../assets/ice_cream.jpg'
import lobster from '../assets/lobster.jpg'
import tomato from '../assets/tomato.jpg'


import img_1 from '../assets/tomato.jpg'
import img_2 from '../assets/durant.jpg'
import img_3 from '../assets/lobster.jpg'
import img_4 from '../assets/chizza.jpg'

let list = {
	default: [{
		icon: newFriend,
		nickName: 'New Friends',
		initials: 'default' //表示首字母
	}, {
		icon: tag,
		nickName: 'Tags',
		initials: 'default'
	}, {
		icon: officialAccount,
		nickName: 'Official Accounts',
		initials: 'default'
	}, {
		icon: groupChat,
		nickName: 'Group Chat',
		initials: 'default'
	}],
	A: [{
		icon: durant,
		nickName: '阿基米德',
		initials: 'A',
		identity: 'Archimedes',
		gender: 'male',
		region: {
			icon: null,
			title: 'Region',
			describe: 'Shenzheng,Guangdong',
			split: true
		},
		album: {
			icon: null,
			title: 'Album',
			describe: [
				img_1, img_2, img_3, img_4
			],
			split: false
		}
	}],
	B: [{
		icon: frenchfries,
		nickName: '本华莱士',
		initials: 'B',
		identity: 'Ben Wallace',
		gender: 'male',
		region: {
			icon: null,
			title: 'Region',
			describe: 'Celic,Boston',
			split: true
		},
		album: {
			icon: null,
			title: 'Album',
			describe: [
				img_2, img_1, img_3, img_4
			],
			split: false
		}
	}, {
		icon: ice_cream,
		nickName: '本杰明 巴顿',
		initials: 'B',
		identity: 'Benjamin Barton',
		gender: 'male',
		region: {
			icon: null,
			title: 'Region',
			describe: 'Milano,Italy',
			split: true
		},
		album: {
			icon: null,
			title: 'Album',
			describe: [
				img_3, img_1, img_4, img_2
			],
			split: false
		}
	}],
	C: [{
		icon: lobster,
		nickName: '成吉思汗',
		initials: 'C',
		identity: 'Genghis Khan',
		gender: 'male',
		region: {
			icon: null,
			title: 'Region',
			describe: 'Wine,Mongolia',
			split: true
		},
		album: {
			icon: null,
			title: 'Album',
			describe: [
				img_1, img_3, img_2, img_4
			],
			split: false
		}
	}],
	D: [{
		icon: tomato,
		nickName: '大味贝克汗脚',
		initials: 'D',
		identity: 'David Beckhamfoot',
		gender: 'female',
		region: {
			icon: null,
			title: 'Region',
			describe: 'Los Angeles,Califonia',
			split: true
		},
		album: {
			icon: null,
			title: 'Album',
			describe: [
				img_4, img_1, img_2, img_3
			],
			split: false
		}
	}]
}

export default {
	list
}