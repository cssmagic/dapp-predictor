<template>
	<main>
		<div class="content cm-text">
			<h2>功能介绍</h2>
			<blockquote>
				<p>“两年前我就猜到美国要发动贸易战了！”</p>
				<p>“哦？这么厉害？你怎么证明你当时说过这话？”</p>
				<p>“这……”</p>
			</blockquote>
			<p>你明明有先见之明，别人却不相信？来吧，本应用就是为你准备的！</p>
			<p>本应用（我是预言帝）基于 “星云链” 开发，所有数据存储在区块链上。区块链的一大特性在于，链上的数据永久保存，且无法篡改。</p>
			<p>因此，如果你有预知未来的超能力，就赶快把你预言都发布到这里吧！一旦你的预言应验，你就可以拿出这里的预言记录，证明自己先知先觉，而不是马后炮啦！</p>

			<h2>系统需求</h2>
			<ul>
				<li><p>浏览器：</p>
					<ul>
						<li><p>桌面端：您需要使用桌面版 Chrome 浏览器，并安装
							<a href="https://github.com/nebulasio/WebExtensionWallet" target="_blank">星云钱包扩展</a>。<strong>请注意</strong>：钱包扩展需要保持在默认的 “主网”（mainnet）状态。
						</p></li>
						<li><p>手机端：推荐使用手机自带浏览器（iOS Safari 或 Android Chrome），并安装
							<a href="https://nano.nebulas.io/" target="_blank">星云官方手机钱包 APP：Nas nano</a>。
						</p></li>
					</ul>
				</li>
				<li>
					<p>您需要有一个自己的星云钱包，并导入到 Chrome 钱包扩展或手机钱包 APP 中。如果没有钱包，可以通过星云 Web Wallet 创建，<a href="https://blog.nebulas.io/2018/04/12/creating-a-nas-wallet/" target="_blank">教程参见这里</a>（也可以通过钱包扩展来创建，操作步骤类似）。
					</p></li>
				<li><p>您的星云钱包里需要有少许星云币余额，用于提交数据时支付手续费（数额极小，在交易时由链收取）。您可以在微博发私信求助
					<a href="https://weibo.com/cssmagic" target="_blank">本应用的作者</a>，作者将赠送给您少量星云币。
				</p>
				</li>
			</ul>

			<h2>开发计划</h2>
			<ul>
				<li>✅ 2018-06-01 可发布和浏览预言</li>
				<li>✅ 2018-06-03 可把预言分享到微博</li>
				<li>✅ 2018-06-04 可为预言点赞</li>
				<li>✅ 2018-06-04 可浏览热度排行榜</li>
				<li>✅ 2018-06-05 自动查询用户地址，省去手动输入</li>
				<li>✅ 2018-06-05 点赞后自动更新热度排行榜</li>
				<li>✅ 2018-06-08 可在网页端屏蔽指定内容</li>
				<li>✅ 2018-06-08 适配手机浏览器与星云手机钱包</li>
				<li>🕙 提示框样式优化</li>
				<li>🕙 后台管理界面可删除违规内容</li>
				<li>……</li>
			</ul>

			<h2>版权</h2>
			<p>本应用基于以下开源软件开发：</p>
			<ul>
				<li>Nasa.js</li>
				<li>Vue.js</li>
				<li>Underscore</li>
				<!--<li>Gearbox</li>-->
				<li>CMUI</li>
			</ul>
			<p>以下素材已获非商业授权：</p>
			<ul>
				<li>Logo 图片：CoolClips.com</li>
				<li>Logo 字体：方正咆哮简体</li>
			</ul>

			<h2>关于</h2>
			<ul>
				<li>产品设计、网页设计：@CSS魔法</li>
				<li>客户端开发：@CSS魔法</li>
				<li>合约端开发：匿名侠</li>
			</ul>
			<p>在使用中遇到任何问题，请通过微博 <a href="https://weibo.com/cssmagic" target="_blank">联系作者</a>。</p>
			<!--
			<hr>
			<p>感觉不错？打赏鼓励一下：</p>
			-->
		</div>
		<!--
		<div class="action">
			<input type="button" class="cm-btn cm-btn-s cm-btn-warning" value="立即打赏" data-action="donate">
		</div>
		-->
	</main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import storageModel from '@/assets/js/storage-model'

@Component
export default class Help extends Vue {
	created() {
		storageModel.suppressGuestTip = 1
	}
}

</script>

<style scoped lang="stylus">
@import "../assets/css/ui.styl"
.cm-text
	blockquote
		border-left 3px solid $cm-color-symbol
		padding-left 1em
		margin-bottom 15px
	p, h4
	ul, ol
		margin-top 10px
		margin-bottom 10px

</style>
