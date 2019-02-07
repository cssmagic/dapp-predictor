import { Component, Prop, Vue } from 'vue-property-decorator'
import * as storage from '@/assets/js/storage'

interface ILSKeys {
	[key: string]: any
}
interface IAPI {
	get: (key: string) => any
	set: (key: string, value: any) => void
	[key: string]: any
}

// key - 需要持久化存储的键名
// value - 在本地存储中取不到值时的默认值
const lsConfig: ILSKeys = {
	walletMobileAppInstalled: false,
	suppressGuestTip: false,
	nickname: '',
	addr: '',
}

// 根据上面的 key 配置，生成 Vue 实例配置
function buildVueOptions(config: ILSKeys) {
	// build `data`
	const data: any = {}
	Object.keys(config).forEach((key) => {
		const defaultValue = config[key]
		const lsValue = storage.get(key)
		data[key] = lsValue === undefined ? defaultValue : lsValue
	})

	// build `watch`
	const watch: any = {}
	Object.keys(config).forEach((key) => {
		watch[key] = (function (key: string) {
			return function (val: any) {
				storage.set(key, val)
			}
		})(key)
	})

	// `methods`
	const methods: IAPI = {
		get(key: string): any {
			return this[key]
		},
		set(key: string, value: any): void {
			this[key] = value
		}
	}

	return {
		data,
		watch,
		methods,
	}
}

export default <IAPI>new Vue(buildVueOptions(lsConfig))
