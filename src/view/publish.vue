<template>
	<main>
		<header>
			<h1>发布预言</h1>
		</header>
		<div class="content">
			<form action="#" method="post" class="cm-form" @submit.prevent="onSubmit">
				<div class="cm-section-content">
					<div class="cm-form-line">
						<label for="input-nickname" class="cm-form-label">
							<em class="required">*</em> 我是：
						</label>
						<div class="cm-form-ctrl">
							<input
								placeholder="小明"
								id="input-nickname"
								type="text"
								v-model.trim="nickname"
							>
						</div>
					</div>
					<div class="cm-form-line">
						<label for="textarea-message" class="cm-form-label">
							<em class="required">*</em> 我预言：
						</label>
						<div class="cm-form-ctrl">
							<textarea
								placeholder="将来某个时间一定会发生某件事……"
								id="textarea-message"
								maxlength="500"
								v-model.trim="message"
							></textarea>
						</div>
					</div>
				</div>
				<div class="action">
					<input type="submit" class="cm-btn cm-btn-warning" value="发布">
					<p class="tip">* 提交此表单即意味着您已阅读并同意
						<router-link to="/agreement">用户协议</router-link>。
					</p>
				</div>
			</form>
		</div>
	</main>
</template>

<script lang="ts">
declare const Nasa: any

import { Component, Prop, Vue } from 'vue-property-decorator'
import storageModel from '@/assets/js/storage-model'

@Component
export default class Publish extends Vue {
	nickname = storageModel.nickname
	message = ''

	onSubmit() {
		// save nick name to localStorage
		const nickname = this.nickname
		if (nickname) storageModel.nickname = nickname

		if (this.validate()) this.submit()

	}
	private validate(): boolean {
		let name = this.nickname
		let msg = this.message
		if (!name || !msg) {
			alert('请输入您的大名和预言内容！')
			return false
		} else {
			return true
		}
	}
	private submit() {
		Nasa.call('default', 'create', [this.nickname, this.message])
			.then((result: any) => {
				console.log(result)
			})
			.catch((e: Error) => {
				alert(e.message)
			})
	}
}
</script>

<style scoped lang="stylus">
@import "../assets/css/ui.styl"
div.content
	.cm-form-ctrl textarea
		box-sizing content-box
		height 80px
	.action
		.tip
			margin-top 10px
			font-size $cm-font-size-s
			color $cm-color-fg-x-light
			text-align center
			a
				color inherit
				text-decoration underline

</style>
