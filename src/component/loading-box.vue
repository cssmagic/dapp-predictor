<template>
<div class="loading-box">
	<div class="loading-box-content">
		<i class="cm-icon cm-icon-x30-loading-black"></i>
		<p>正在努力加载……</p>
	</div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LoadingBox extends Vue {}
</script>

<style scoped lang="stylus">
@import "../assets/css/ui.styl"
.loading-box
	display flex
	justify-content center
.loading-box-content
	clearfix()
	line-height 30px
	.cm-icon
		float left
	p
		float left
		margin-left 0.5em
</style>
