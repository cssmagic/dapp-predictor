<template>
	<main>
		<template v-if="!isReady">
			<loading-box class="cm-info-box" />
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
					:is-loading="isLoading"
					:is-complete="isComplete"
					v-on:loadMore="onClickLoadMore"
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
/// <reference types="nasa.js"/>
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IRawMsg, IMsg, TSortType, TPlaceholderNumber } from '@/assets/js/type'
import { formatMsg } from '@/assets/js/formatter'
import { blacklistMsg } from '@/assets/js/config'

import LoadingBox from '../component/loading-box.vue'
import MsgList from '../component/msg-list.vue'

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
	components: {
		MsgList,
		LoadingBox,
	},
})
export default class All extends Vue {
	isReady = false
	isLoading = false
	sortType: TSortType = 'time'
	total: TPlaceholderNumber = '-'
	list: IMsg[] = []
	listAllMsg: (IMsg[] | null) = null
	listLikedMsg: (IMsg[] | null) = null

	limit = 2
	currentPage = 1

	get isComplete() {
		if (this.listAllMsg === null) return false
		if (this.sortType === 'like') return true
		return this.total === this.listAllMsg.length
	}

	created() {
		if (!this.listAllMsg) this.loadAllMsg()
		if (!this.listLikedMsg) this.loadLikedMsg()
	}

	sortBy(sortType: TSortType) {
		this.sortType = sortType
		if (!this.listLikedMsg) this.loadLikedMsg()
		this.list = sortType === 'like' ? this.listLikedMsg! : this.listAllMsg!
	}

	loadAllMsg() {
		this.isLoading = true
		Nasa.query('default', 'getAllMessages', [this.limit, (this.currentPage - 1) * this.limit])
			.then(({ execResult }) => {
				console.log(execResult)
				const messages: IRawMsg[] = execResult.messages || []
				const formattedMessages = messages.map(formatMsg)
				if (!this.listAllMsg) {
					this.listAllMsg = formattedMessages
				} else {
					this.listAllMsg = [...this.listAllMsg, ...formattedMessages]
				}

				this.total = execResult.total
			})
			.catch((data) => {
				console.error(data)
			})
			.then(() => {
				if (this.sortType === 'time') {
					this.isLoading = false
					this.list = this.listAllMsg
				}
				this.isReady = true
				this.currentPage++
			})
	}

	loadLikedMsg() {
		this.isLoading = true
		Nasa.query('default', 'getHotMessages', [100])
			.then(({ execResult }) => {
				console.log(execResult)
				const messages: IRawMsg[] = execResult.messages || []
				this.listLikedMsg = messages.map(formatMsg)
			})
			.catch((data) => {
				console.error(data)
				this.listLikedMsg = []
			})
			.then(() => {
				if (this.sortType === 'like') {
					this.isLoading = false
					this.list = this.listLikedMsg
				}
			})
	}
	onClickLoadMore() {
		this.loadAllMsg()
	}
}
</script>

<style scoped lang="stylus">
@import "../assets/css/ui.styl"

.sort-box
	.splitter
		margin 0 0.5em
		color $cm-color-symbol

	// selected
	&.time a.time
	&.like a.like
		font-weight bold
		color inherit
		cursor text
		pointer-events none
		text-decoration none

</style>
