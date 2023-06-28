<template>
	<div :class="`container ${props.class}`" v-bind="$attrs">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
	type TheContainerProps = { class?: string };
	const props = defineProps<TheContainerProps>();
</script>

<style scoped>
	.container {
		max-width: 1140px;
		padding: 0px 24px;
	}
</style>
