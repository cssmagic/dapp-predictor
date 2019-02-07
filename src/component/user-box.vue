<template>
	<div class="user-box">
		<div class="avatar-wrapper">
			<user-avatar
				:is-guest="isGuest"
				:avatar="avatar"
			/>
		</div>
		<div class="nickname">{{ _nickname }}</div>
		<div class="addr">{{ _addr }}</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { shortenAddr } from '@/assets/js/formatter'

import UserAvatar from './user-avatar.vue'

const fallbackAddr = 'Unknown'
const fallbackNickname = '我'

@Component({
	components: { UserAvatar },
})
export default class UserBox extends Vue {
	@Prop({
		type: Boolean,
		default: true,
	}) isGuest!: boolean
	@Prop({
		type: String,
		default: fallbackNickname,
	}) nickname!: string
	@Prop({
		type: String,
		default: fallbackAddr,
	}) addr!: string
	@Prop({
		type: String,
		default: '',
	}) avatar!: string

	get _nickname() {
		return this.nickname || fallbackNickname
	}

	get _addr() {
		return this.addr ? shortenAddr(this.addr) : fallbackAddr
	}
}
</script>

<style scoped lang="stylus">
@import "../assets/css/ui.styl"
.user-box
	$size = $userBoxAvatarSize
	clearfix()
	min-height $size

	.avatar-wrapper
		float left
		margin-right 15px
		size $size

	.nickname
		font-weight bold
		font-size 24px
		margin-top 3px
		overflow ellipsis

	.addr
		color $cm-color-fg-x-light
		font-family Menlo, Consolas, monospace
		overflow ellipsis

</style>
