<template>
	<main>
		<user-box
			v-if="isKnownUser !== null"
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
			<loading-box v-if="isLoading"/>
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
							:is-complete="isComplete"
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
import { IMsg, TPlaceholderNumber } from '@/assets/js/type'
import storageModel from '@/assets/js/storage-model'

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
	isComplete: boolean = true	// 此列表不分页

	addr: string = ''
	avatar: string = ''
	total: TPlaceholderNumber = '-'
	isKnownUser: boolean | null = null
	list: IMsg[] = []

	created() {
		Nasa.user.getAddr()
			.then((addr: string) => {
				this.isKnownUser = true
				this.addr = addr
				storageModel.set('addr', addr)
			})
			.catch((err) => {
				this.isKnownUser = false
				console.log(err)
			})

	}

	get nickname() {
		return storageModel.get('nickname')
	}

	inputAddr() {

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
