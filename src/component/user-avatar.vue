<template>
	<figure class="avatar"></figure>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Avatar extends Vue {
	@Prop({
		type: String,
		default: ''
	})
	avatar!: string
}
</script>

<style scoped lang="stylus">
@import "../assets/css/ui.styl"
.avatar
	size 100%	// according to the wrapper
	background-image url(../assets/img/avatar-default.png)
	background-size cover
	border-radius 100%
	background-color $cm-color-symbol


</style>
