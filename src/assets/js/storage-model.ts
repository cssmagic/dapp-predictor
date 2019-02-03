import { Component, Prop, Vue } from 'vue-property-decorator'
import * as storage from '@/assets/js/storage'

interface IStorageData {
	suppressGuestTip: boolean | 0 | 1
	nickname: string
	[key: string]: any
}

// TODO 把直接写选项的方式改为：简单的 key 和默认值清单 + 程序生成
export default new Vue({
	data: <IStorageData>{
		suppressGuestTip: !!storage.get('suppressGuestTip'),
		nickname: storage.get('nickname') || '',
	},
	watch: {
		suppressGuestTip(val) {
			storage.set('suppressGuestTip', val)
		},
		nickname(val) {
			storage.set('nickname', val)
		},
	}
})
