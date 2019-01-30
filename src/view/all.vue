<template>
<main id="loading" data-nav="all">
	<template v-if="true">
	<div class="loading-box cm-info-box">
		<div class="content">
			<i class="cm-icon cm-icon-x30-loading-black"></i>
			<p>正在努力加载……</p>
		</div>
	</div>
	</template>
	<template v-else>
	<header>
		<h1>大家已发 <span class="total">-</span> 条预言</h1>
		<div class="action sort-box time">
			<a class="time" href="#sort" data-action>时间排序</a>
			<span class="splitter">|</span>
			<a class="like" href="#sort" data-action>热度排序</a>
		</div>
	</header>
	<div class="content">
		<ul class="cm-list prediction-list time">
			<!-- msg-list-item -->
			<!-- msg-list-item -->
			<!-- msg-list-item -->
			<li class="more">
				<div class="loading-box">
					<div class="content">
						<i class="cm-icon cm-icon-x30-loading-black"></i>
						<p>正在努力加载……</p>
					</div>
				</div>
				<div class="action">
					<a href="#load-more" data-action>加载更多</a>
				</div>
			</li>
		</ul>
		<ul class="cm-list prediction-list like">
			<!-- msg-list-item -->
			<!-- msg-list-item -->
			<!-- msg-list-item -->
			<li class="more">
				<div class="loading-box">
					<div class="content">
						<i class="cm-icon cm-icon-x30-loading-black"></i>
						<p>正在努力加载……</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
	<div class="action">
		<hr>
		<a class="cm-btn cm-btn-warning" href="#go-to-post" data-action>我也要发布预言</a>
	</div>
	</template>
</main>
</template>

<style lang="stylus">
@import "../assets/css/ui.styl"

</style>
