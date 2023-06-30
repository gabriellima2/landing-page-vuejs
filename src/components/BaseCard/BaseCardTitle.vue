<template>
	<div :class="`title-container ${props.class}`">
		<span class="base-card-title__indicator"></span>
		<h1 class="base-card-title">
			<slot></slot>
		</h1>
	</div>
</template>

<script setup lang="ts">
	type BaseCardTitleProps = { class?: string };
	const props = defineProps<BaseCardTitleProps>();
</script>

<style scoped lang="scss">
	@import "../../styles/scss/main";
	.title-container {
		display: flex;
		gap: 20px;
	}
	.base-card-title {
		font-weight: 400;
		font-size: $lg-font-size;
	}
	.base-card-title__indicator {
		display: block;
		width: 2px;
		height: inherit;
		background-color: #ffffff;
	}
</style>
