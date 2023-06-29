<template>
	<h1 :class="['section-title', props.class]" v-bind="props">
		<slot></slot>
	</h1>
</template>

<script setup lang="ts">
	import { HTMLAttributes } from "vue";
	interface SectionTitleProps extends /* @vue-ignore */ HTMLAttributes {}
	const props = defineProps<SectionTitleProps>();
</script>

<style scoped lang="scss">
	@import "../styles/scss/main";
	.section-title {
		font-size: $xl-font-size;
		font-weight: 400;
	}
</style>
