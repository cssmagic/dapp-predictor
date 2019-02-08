<template>
	<ul class="cm-list msg-list">
		<template v-if="!isLoading && !list.length">
			<li class="empty">
				（列表为空）
			</li>
		</template>
		<template v-else>
			<msg-list-item
				v-for="item in list"
				v-show="!item.hidden"
				:key="item.id"
				:item="item"
				:is-mine="isMine"
			></msg-list-item>
			<li class="more" v-if="!isComplete">
				<loading-box v-show="isLoading" />
				<div class="action" v-show="!isLoading">
					<a href="#" @click.prevent="onClickLoadMore">加载更多</a>
				</div>
			</li>
		</template>
	</ul>
</template>

<script lang="ts">
import { IMsg } from '@/assets/js/type'
import { Component, Prop, Vue } from 'vue-property-decorator'
import MsgListItem from './msg-list-item.vue'
import LoadingBox from './loading-box.vue'

@Component({
	components: {
		MsgListItem,
		LoadingBox,
	},
})
export default class MsgList extends Vue {
	@Prop({
		type: Boolean,
		default: false,
	}) isLoading!: boolean
	@Prop({
		type: Boolean,
		default: true,
	}) isComplete!: boolean
	@Prop({
		type: Boolean,
		default: false,
	}) isMine!: boolean
	@Prop({
		type: Array,
		default: [],
	}) list!: IMsg[]

	onClickLoadMore() {
		this.$emit('loadMore')
	}

}
</script>

<style scoped lang="stylus">
@import "../assets/css/ui.styl"

-item-layout()
	padding 10px 0
	line-height 30px
	text-align center

.msg-list
	background-color $cm-color-bg

	li.empty
		-item-layout()

	li.more
		> .loading-box
			min-height auto
			-item-layout()

		> .action
			a
				display block
				-item-layout()
				&:hover
					text-decoration none
					background-color #f6f6f6

</style>
