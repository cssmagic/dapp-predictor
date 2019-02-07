<template>
	<figure class="avatar" :class="{ 'avatar-unknown': isGuest }">
		<img
			alt="[Avatar]"
			v-if="avatar"
			:src="avatar"
		>
	</figure>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UserAvatar extends Vue {
	@Prop({
		type: Boolean,
		default: false,
	}) isGuest!: boolean
	@Prop({
		type: String,
		default: '',
	}) avatar!: string
}
</script>

<style scoped lang="stylus">
@import "../assets/css/ui.styl"
.avatar
	size 100%	// according to the wrapper
	background-image url(../assets/img/avatar-default.png)
	background-size cover
	border-radius 100%
	background-color $cm-color-symbol
	&.avatar-unknown
		$size = $userBoxAvatarSize
		line-height $size
		color white
		font-size $size * 0.5625	// 64 x 0.5625 = 36
		font-weight bold
		text-align center
		background-image none
		&::after
			content '?'
	img
		size 100%

</style>
