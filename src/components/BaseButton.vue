<template>
	<button
		:class="`base-button ${props.class} ${props.bordered && 'bordered'}`"
		v-bind="$attrs"
	>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
	type BaseButtonProps = { bordered?: boolean; class?: string };
	const props = defineProps<BaseButtonProps>();
</script>

<style scoped lang="scss">
	@import "../styles/scss/_main.scss";
	.base-button {
		height: 52px;
		padding: 16px 32px;
		border-radius: 36px;
		text-transform: uppercase;
		background: linear-gradient(to right, $brand-color 0%, $main-color 100%);
		&:hover,
		&:focus {
			background: linear-gradient(to right, $brand-color 100%, $main-color 0%);
		}
	}

	.bordered {
		border: 1px solid $font-primary-color;
		transition: all 0.2s ease-in-out;
		background: transparent;
		&:hover,
		&:focus {
			background: $font-primary-color;
			color: $main-color;
		}
	}
</style>
