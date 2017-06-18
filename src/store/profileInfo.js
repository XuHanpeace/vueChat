import wallet from '../assets/profile/wallet.png'
import my_favorites from '../assets/profile/my-favorite.png'
import more_stickers from '../assets/profile/more-expressions.png'
import my_pakage from '../assets/profile/my-pakage.png'
import my_posts from '../assets/profile/my-posts.png'
import settings from '../assets/profile/settings.png'
import avator from '../assets/profile/avator.jpg'

export default {
	profileInfo: {
		wallet: {
			title: 'Wallet',
			icon: wallet,
			split: true
		},
		favorites: {
			title: 'Favorites',
			icon: my_favorites,
			split: false
		},
		myPosts: {
			title: 'My Posts',
			icon: my_posts,
			split: false
		},
		pakage: {
			title: 'Cards & Offers',
			icon: my_pakage,
			split: false
		},
		stickers: {
			title: 'Stickers Gallary',
			icon: more_stickers,
			split: true
		},
		settings: {
			title: 'Settings',
			icon: settings,
			split: false
		}

	},
	myProfile: {
		icon: avator,
		nickName: '大热狗狗',
		identity: 'longlivehotdog',
		gender: null
	}
}