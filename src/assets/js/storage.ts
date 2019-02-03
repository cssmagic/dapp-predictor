import { APP_NAME } from '@/assets/js/config'

const STORAGE_KEY = APP_NAME

export function set(key: string, value: any): void {
	let data = _getLSData() || {}
	data[key] = value
	localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function get(key: string): any {
	let data = _getLSData() || {}
	return data[key]
}

export function del(key: string): void {
	let data = _getLSData() || {}
	delete data[key]
	localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function clear(): void {
	localStorage.removeItem(STORAGE_KEY)
}

function _getLSData(): any {
	let data = localStorage.getItem(STORAGE_KEY) || 'null'
	return JSON.parse(data)
}


export function hasLocalStorage() {
	return _detectStorageAPI('localStorage')
}
export function hasSessionStorage() {
	return _detectStorageAPI('sessionStorage')
}

function _detectStorageAPI(type: 'localStorage' | 'sessionStorage'): boolean {
	let storage = window[type]

	if(!storage) return false

	const data = Date.now().toString()
	const KEY = '__storage_test__'

	try {
		storage.setItem(KEY, data)
		if (data !== storage.getItem(KEY)) {
			return false
		} else {
			storage.removeItem(KEY)
			if (storage.getItem(KEY)) {
				return false
			}
		}
	} catch (e) {
		return false
	}
	return true
}
