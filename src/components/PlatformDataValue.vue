<template>
	<h2 :class="`platform-data-value ${props.class}`"><slot></slot></h2>
</template>

<script setup lang="ts">
	type PlatformDataValueProps = { class?: string };
	const props = defineProps<PlatformDataValueProps>();
</script>

<style scoped lang="scss">
	@import "../styles/scss/main";
	.platform-data-value {
		font-size: $xxl-font-size;
		text-transform: uppercase;
		font-weight: 400;
	}
</style>
