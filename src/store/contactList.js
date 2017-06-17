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
		initials: 'A'
	}],
	B: [{
		icon: frenchfries,
		nickName: '本华莱士',
		initials: 'B'
	}, {
		icon: ice_cream,
		nickName: '本杰明 巴顿',
		initials: 'B'
	}],
	C: [{
		icon: lobster,
		nickName: '成吉思汗',
		initials: 'C'
	}],
	D: [{
		icon: tomato,
		nickName: '大味贝克汗脚',
		initials: 'D'
	}]
}

export default {
	list
}