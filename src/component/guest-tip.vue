<template>
<div class="cm-msg-box cm-msg-box-info cm-msg-box-with-icon" id="guest-tip">
	<i class="cm-icon cm-icon-x20-msg-info"></i>
	<a class="cm-msg-box-close-btn" href="#" @click.prevent="closeMsgBox"></a>
	第一次来？请先阅读 <router-link to="/help">功能介绍 &gt;&gt;</router-link>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GuestTip extends Vue {
	closeMsgBox() {
		alert('TODO: close')
	}
}
</script>

<style scoped lang="stylus">
@import "../assets/css/ui.styl"
#guest-tip
	background-color #cdf0ff


</style>
