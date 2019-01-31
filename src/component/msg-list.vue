<template>
	<ul class="cm-list msg-list">
		<template v-if="!list.length">
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
			></msg-list-item>
			<li class="more">
				<div class="loading" v-show="isLoading">
					<loading-box-content />
				</div>
				<div class="action" v-show="isLoaded && !isComplete">
					<a href="#" @click.prevent="onClickLoadMore">加载更多</a>
				</div>
			</li>
		</template>
	</ul>
</template>

<script lang="ts">
/// <reference path="../assets/js/type.d.ts" />
import { Component, Prop, Vue } from 'vue-property-decorator'
import MsgListItem from './msg-list-item.vue'
import LoadingBoxContent from './loading-box-content.vue'

@Component({
	components: {
		MsgListItem,
		LoadingBoxContent,
	},
})
export default class MsgList extends Vue {
	@Prop(Boolean) isLoading!: boolean
	@Prop(Boolean) isLoaded!: boolean
	@Prop(Boolean) isComplete!: boolean
	@Prop({
		type: Array,
		default: [],
	})
	list!: IMsg[]

	onClickLoadMore() {

	}

}
</script>

<style scoped lang="stylus">
@import "../assets/css/ui.styl"

.msg-list
	background-color $cm-color-bg


</style>
