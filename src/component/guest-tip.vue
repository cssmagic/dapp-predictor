<template>
<div class="cm-msg-box cm-msg-box-info cm-msg-box-with-icon" id="guest-tip">
	<i class="cm-icon cm-icon-x20-msg-info"></i>
	<a class="cm-msg-box-close-btn" href="#close-msg-box"></a>
	第一次来？请先阅读 <a href="#help" data-action="switch-view">功能介绍 &gt;&gt;</a>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GuestTip extends Vue {

}
</script>

<style scoped lang="stylus">
@import "../assets/css/ui.styl"
#guest-tip
	background-color #cdf0ff


</style>
