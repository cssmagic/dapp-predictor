<template>
<article>
	<global-header />
	<global-nav />
	<guest-tip v-if="!suppressGuestTip" />

	<router-view />
	<global-footer />
</article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import storageModel from '@/assets/js/storage-model'
import 'nasa.js'
import '@/assets/js/init'

import GlobalHeader from './component/global-header.vue'
import GuestTip from './component/guest-tip.vue'
import GlobalNav from './component/global-nav.vue'
import GlobalFooter from './component/global-footer.vue'

@Component({
	components: {
		GlobalHeader,
		GlobalNav,
		GuestTip,
		GlobalFooter,
	},
})
export default class App extends Vue {
	get suppressGuestTip() {
		return storageModel.get('suppressGuestTip')
	}
}
</script>

<style lang="stylus">
@import "assets/css/base.styl"
@import "assets/css/ui.styl"

</style>
