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
}
</script>

<style lang="stylus">
@import "assets/css/base.styl"
@import "assets/css/ui.styl"

</style>
