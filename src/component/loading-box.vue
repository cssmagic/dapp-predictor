<template>
<div class="loading-box cm-info-box">
	<loading-box-content />
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LoadingBoxContent from './loading-box-content.vue'
@Component({
	components: { LoadingBoxContent },
})
export default class LoadingBox extends Vue {
}
</script>

<style scoped lang="stylus">
@import "../assets/css/ui.styl"
.loading-box
	display flex
	justify-content center

</style>
