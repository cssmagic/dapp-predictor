<template>
<header>
	<span class="logo"><i class="cm-icon cm-icon-site-logo">我是预言帝</i></span>
	<p class="slogan">——让区块链铭刻你的预言！</p>
</header>
</template>

<style scoped lang="stylus">
@import "../assets/css/ui.styl"
header
	clearfix()
	padding 0 $cm-content-padding
	padding-top 10px
	padding-bottom 10px
	background-color white
	.logo
		display block
		float left
	.slogan
		display none
		float left
		margin-top 36px
		margin-left 30px
		white-space nowrap
		font-size $cm-font-size-s
		font-style italic
		color $cm-color-fg-light
		@media screen and (min-width: 480px)
			display block

.cm-icon-site-logo
	size 234px 55px
	background-image url(../assets/img/logo.png)
	background-size cover

</style>
