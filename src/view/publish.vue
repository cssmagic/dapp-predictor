<template>
	<main>
		<header>
			<h1>发布预言</h1>
		</header>
		<div class="content">
			<form action="#" class="cm-form">
				<div class="cm-section-content">
					<div class="cm-form-line">
						<label for="input-nick-name" class="cm-form-label">
							<em class="required">*</em> 我是：
						</label>
						<div class="cm-form-ctrl">
							<input placeholder="小明" type="text" name="nickname" id="input-nick-name">
						</div>
					</div>
					<div class="cm-form-line">
						<label for="textarea-message" class="cm-form-label">
							<em class="required">*</em> 我预言：
						</label>
						<div class="cm-form-ctrl">
							<textarea placeholder="将来某个时间一定会发生某件事……" name="message" id="textarea-message" maxlength="500"></textarea>
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
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Publish extends Vue {}
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
