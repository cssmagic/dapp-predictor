<template>
<nav>
	<ul>
		<li :class="{ current: ifCurrentViewMatchTab('all') }"><router-link to="/">所有预言</router-link></li>
		<li :class="{ current: ifCurrentViewMatchTab('mine') }"><router-link to="/mine">我的预言</router-link></li>
		<li :class="{ current: ifCurrentViewMatchTab('help') }"><router-link to="/help">功能介绍</router-link></li>
	</ul>
</nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GlobalNav extends Vue {
	ifCurrentViewMatchTab(tabName: string): boolean {
		// TODO 看这一段配置信息能不能挪到 router 配置里去
		const mapFromViewToTab = {
			detail: 'all',
			publish: 'mine',
			agreement: 'mine',
		}
		const currentRouteName = this.$route.name
		if (currentRouteName === tabName) {
			return true
		} else {
			const belongedTabName = mapFromViewToTab[currentRouteName]
			return belongedTabName === tabName
		}
	}
}
</script>

<style scoped lang="stylus">
@import "../assets/css/ui.styl"
nav
	$-h = 50px
	$-color-fg = white
	$-color-bg = $cm-color-primary
	$-color-bg-current = #006fce
	$-color-bg-hover = darken($-color-bg, 7.5%)
	$-color-sub-bg = rgba(12, 100, 175, 0.9)
	$-color-sub-fg = #a4d2ff
	$-color-sub-fg-current = white
	$-color-sub-fg-hover = white

	&
		height $-h
		line-height $-h
		overflow hidden
		text-align center
		font-size $cm-font-size-l
		color $-color-fg
		background-color $-color-bg
	a
		display block
		color inherit
	> ul
		wrapper()

		> li
			float left
			position relative
			z-index 100
			width 105px
			&.home
				width 80px
			> a
				font-weight bold
				text-decoration none !important
			/html.no-touch & > a:hover
				background-color $-color-bg-hover
			&.current > a
				background-color $-color-bg-current !important


</style>
