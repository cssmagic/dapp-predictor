<template>
	<li :data-id="item.id">
		<div class="inner">
			<div class="author-box" v-if="!isMine">
				<div class="avatar-wrapper">
					<user-avatar />
				</div>
				<div class="nickname">{{ item.author_name }}</div>
				<div class="addr">{{ item.shortAddr }}</div>
			</div>
			<div class="message">
				<header>在 {{ item.publishedTime }} 预言：</header>
				<div class="message-content">{{ item.content }}</div>
				<footer class="action">
					<a class="share" href="#share" @click.prevent="share">分享到微博</a>
					<span class="splitter">|</span>
					<a class="like" href="#like" @click.prevent="like">点赞
						<span :class="item.like ? 'hot' : ''">({{ item.like || 0 }})</span>
					</a>
				</footer>
			</div>
		</div>
	</li>
</template>

<script lang="ts">
import { IMsg } from '@/assets/js/type'
import { Component, Prop, Vue } from 'vue-property-decorator'
import UserAvatar from './user-avatar.vue'

@Component({
	components: { UserAvatar },
})
export default class MsgListItem extends Vue {
	@Prop({
		type: Boolean,
		default: false,
	}) isMine!: boolean
	@Prop(Object) item!: IMsg

	share() {
		// todo 需判断：当前预言是自己的还是别人的
	}

	like() {

	}
}
</script>

<style scoped lang="stylus">
@import "../assets/css/ui.styl"

li
	&.hidden
		display none
	> .inner
		clearfix()
		white-space normal !important // 清除 .cm-list 的初始样式
		line-height 1.5 !important
	// 清除 .cm-list 的初始样式
	.author-box
		float left
		width 70px

	.message
		margin-left 15px
	.author-box + .message
		margin-left 85px
	.message
		header
			color $cm-color-fg-x-light
			font-size 12px
		.message-content
			$color = #cdf0ff
			//$color = #e5f6fd
			//$color = #fff7e9
			position relative
			padding 7px 10px 10px
			min-height 30px
			background-color $color
			border-radius 10px
			&::before
				$size = 15px
				content ''
				position absolute
				left (- $size)
				top 12px
				size 0
				border 0 solid $color
				border-width $size 0 0 $size
				border-left-color transparent
		footer.action
			margin-top 5px
			padding-right 0.5em
			text-align right
			font-size $cm-font-size-s
			color $cm-color-fg-light
			a
				color inherit
				/html.no-touch &:hover
					color $cm-color-link
				/html.no-touch &.delete:hover
					color brown
				span.hot
					font-weight bold
					color brown
			.splitter
				margin 0 0.5em
				color $cm-color-splitter
.author-box
	clearfix()
	text-align center
	line-height 1.5
	.avatar-wrapper
		$size = 32px
		margin auto
		size $size
	.nickname
		margin-top 5px
		font-size 14px
		overflow ellipsis
	.addr
		font-size 12px
		color $cm-color-fg-x-light
		font-family Menlo, Consolas, monospace
		overflow ellipsis

</style>
