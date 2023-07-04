<template>
	<article :class="`data-block ${props.class}`">
		<h1 class="data-block__value">{{ value }}</h1>
		<h2 class="data-block__label">{{ label }}</h2>
	</article>
</template>

<script setup lang="ts">
	type DataBlockProps = {
		value: string;
		label: string;
		class?: string;
	};
	const props = defineProps<DataBlockProps>();
</script>

<style scoped lang="scss">
	@import "../styles/scss/main";
	.data-block {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		padding: 8px;
		border-radius: 8px;
		background-color: #19161c;
	}
	.data-block__value {
		font-weight: 400;
		text-align: center;
		font-size: $xl-font-size;
		margin-bottom: 8px;
	}
	.data-block__label {
		font-weight: 400;
		text-transform: uppercase;
		text-align: center;
		font-size: $xs-font-size;
		color: $font-secondary-color;
	}
</style>
