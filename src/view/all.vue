<template>
	<main>
		<template v-if="!isReady">
			<loading-box />
		</template>
		<template v-else>
			<header>
				<h1>大家已发 <span class="total">{{ total }}</span> 条预言</h1>
				<div class="action sort-box" :class="sortType">
					<a class="time" href="#" @click.prevent="sortBy('time')">时间排序</a>
					<span class="splitter">|</span>
					<a class="like" href="#" @click.prevent="sortBy('like')">热度排序</a>
				</div>
			</header>

			<div class="content">
				<msg-list
					:list="list"
					:is-loaded="isLoaded"
					:is-loading="isLoading"
					:is-complete="isComplete"
				/>
			</div>

			<div class="action">
				<hr>
				<router-link class="cm-btn cm-btn-warning" to="/publish">我也要发布预言</router-link>
			</div>
		</template>
	</main>
</template>

<script lang="ts">
import { IMsg, TSortType, TPlaceholderNumber } from '../assets/js/type'
import { Component, Prop, Vue } from 'vue-property-decorator'
import LoadingBox from '../component/loading-box.vue'
import MsgList from '../component/msg-list.vue'
import { blacklistMsg } from '../assets/js/config'

const msg: IMsg = {
	id: 1,
	author_addr: 'string',
	author_name: 'xxx',
	content: 'xxx',
	published_at: 123456789,
	like: 2,
	shortAddr: 'xxx',
	publishedTime: '2019-02-02',
	// hidden: true,
}


@Component({
	components: { MsgList, LoadingBox },
})
export default class all extends Vue {
	isReady = true
	isLoaded = true
	isLoading = false
	isComplete = false
	sortType: TSortType = 'time'
	total: TPlaceholderNumber = '-'
	list: IMsg[] = []
	listAllMsg: (IMsg[] | null) = null
	listLikedMsg: (IMsg[] | null) = null

	created() {
		this.list = [
			msg,
			{ ...msg, id: 2 },
			{ ...msg, id: 3 },
		]
	}

	sortBy(sortType: TSortType) {
		this.sortType = sortType
		if (!this.listAllMsg) this.loadAllMsg()
		if (!this.listLikedMsg) this.loadLikedMsg()
		this.list = sortType === 'like' ? this.listLikedMsg! : this.listAllMsg!
	}

	loadAllMsg() {
		this.isLoading = true
		this.listAllMsg = [
			msg,
			{ ...msg, id: 2 },
			{ ...msg, id: 3 },
		]
		this.isLoading = false
	}

	loadLikedMsg() {
		this.isLoading = true
		this.listLikedMsg = [msg]
		this.isLoading = false
	}
}
</script>

<style lang="stylus">
@import "../assets/css/ui.styl"

.sort-box
	.splitter
		margin 0 0.5em
		color $cm-color-symbol
	//a
	//	text-decoration underline
	// selected
	&.time a.time
	&.like a.like
		font-weight bold
		color inherit
		cursor text
		pointer-events none
		text-decoration none

</style>
