<template>
<article>
	<global-header />
	<global-nav />
	<guest-tip />

	<router-view />
	<global-footer />
</article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import GlobalHeader from './components/global-header.vue'
import GuestTip from './components/guest-tip.vue'
import GlobalNav from './components/global-nav.vue'
import GlobalFooter from './components/global-footer.vue'

@Component({
	components: {
		GlobalHeader,
		GlobalNav,
		GuestTip,
		GlobalFooter,
	},
})
export default class App extends Vue {
	computed: {
		test: () => {
			return
		}
	}
	created() {

	}
}
</script>

<style lang="stylus">
@import "assets/css/base.styl"
@import "assets/css/ui.styl"

</style>
