<template>
	<main v-if="isKnownUser !== null">
		<user-box
			:is-guest="isKnownUser === false"
			:nickname="nickname"
			:addr="addr"
			:avatar="avatar"
		></user-box>

		<template v-if="isKnownUser === false">
			<div class="cm-info-box cm-text guest-info-box">
				<ul>
					<li>您似乎还没有发布过预言。</li>
					<li>如果您曾在别处发布过，请先 <a href="#" @click.prevent="inputAddr">提供您的身份信息</a> 以便查询。</li>
				</ul>
			</div>
		</template>
		<template v-if="isKnownUser === true">
			<loading-box
				class="cm-info-box"
				v-if="isLoading"
			/>
			<template v-else>
				<template v-if="!list.length">
					<div class="cm-info-box cm-text empty-tip">
						<p>您还没有发布过预言，来一发？</p>
					</div>
				</template>
				<template v-else>
					<header>
						<h1>我已发 {{ total }} 条预言</h1>
					</header>
					<div class="content">
						<msg-list
							:list="list"
							:is-loading="isLoading"
							:is-mine="true"
						/>
					</div>
				</template>
			</template>
		</template>

		<div class="action">
			<router-link class="cm-btn cm-btn-warning" to="/publish">我也要发布预言</router-link>
		</div>
	</main>
</template>

<script lang="ts">
///<reference types="nasa.js"/>
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IRawMsg, IMsg, TPlaceholderNumber } from '@/assets/js/type'
import storageModel from '@/assets/js/storage-model'
import { formatMsg } from '@/assets/js/formatter'

import UserBox from '../component/user-box.vue'
import MsgList from '../component/msg-list.vue'
import LoadingBox from '../component/loading-box.vue'

@Component({
	components: {
		LoadingBox,
		MsgList,
		UserBox,
	},
})
export default class Mine extends Vue {
	isLoading: boolean = true
	isComplete: boolean = true	// 此列表不分页，最多取前 100 条，因此总是 true

	// 对当前用户的了解程度：
	// null - 正在判断中，结果待定
	// true - 知道用户的地址
	// false - 不知道用户的地址
	isKnownUser: boolean | null = null

	avatar: string = ''
	total: TPlaceholderNumber = '-'
	list: IMsg[] = []

	get addr() {
		return storageModel.get('addr')
	}
	get nickname() {
		return storageModel.get('nickname')
	}

	created() {
		Nasa.user.getAddr()
			.then((addr: string) => {
				storageModel.set('addr', addr)
			})
			.catch((err) => {
				console.error(err)
			})
			.then(() => {
				const addr = this.addr
				this.isKnownUser = !!addr
				if (addr) this.load()
			})
	}

	inputAddr() {
		let addr = prompt('请输入您的钱包地址：') || ''
		addr = addr.trim()
		if (!addr) {
			return false
		} else if (!Nasa.util.isValidAddr(addr)) {
			alert('抱歉，您输入的地址格式不正确。')
			return false
		}
		storageModel.set('addr', addr)
		this.isKnownUser = true
		this.load()
	}

	load() {
		Nasa.query('default', 'getMessagesByAuthorAddr', [this.addr, 100, 0])
			.then(({ execResult }) => {
				const messages: IRawMsg[] = execResult.messages || []
				this.list = messages.map(formatMsg)
				this.total = execResult.total || messages.length
			})
			.catch((data) => {
				this.list = []
				console.error(data)
			})
			.then(() => {
				this.isLoading = false
			})
	}
}

</script>

<style scoped lang="stylus">
@import "../assets/css/ui.styl"
.guest-info-box
	li + li
		margin-top 0.75em

.empty-tip
	line-height 3em


</style>
