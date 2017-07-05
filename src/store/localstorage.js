const localstore = function(item, defaultVal) {
	this.get = function() {
		return localStorage.getItem(item) !== null ? localStorage.getItem(item) : defaultVal
	}

	this.set = function(obj) {
		localStorage.setItem(item, JSON.stringify(obj))
	}

	this.remove = function() {
		localStorage.removeItem(item)
	}
}


export const origin = new localstore('origin', 'goback');

export const homePage = new localstore('isHomePage', true);

export const keepRecord = new localstore('record', null)