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
					<a href="#agreement" data-action="switch-view">用户协议</a>。</p>
			</div>
		</form>
	</div>
</main>
</template>
