<template>
	<h2 :class="`community-data-value ${props.class}`"><slot></slot></h2>
</template>

<script setup lang="ts">
	type CommunityDataValueProps = { class?: string };
	const props = defineProps<CommunityDataValueProps>();
</script>

<style scoped lang="scss">
	@import "../../styles/scss/main";
	.community-data-value {
		font-size: $xxl-font-size;
		text-transform: uppercase;
		font-weight: 400;
	}
</style>
