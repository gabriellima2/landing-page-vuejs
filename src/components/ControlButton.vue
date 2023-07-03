<template>
	<button
		:class="`control-button ${isActive && 'control-button--active'}`"
		type="button"
		v-bind="$attrs"
	>
		{{ text }}
	</button>
</template>

<script setup lang="ts">
	type ControlButtonProps = {
		text: string;
		isActive?: boolean;
	};
	defineProps<ControlButtonProps>();
</script>

<style scoped lang="scss">
	@import "../styles/scss/main";
	.control-button {
		padding: 14px;
		border-radius: 14px;
		border: 1px solid transparent;
		font-family: $primary-font;
		background-color: $contrast-primary-color;
		transition: all 0.2s ease;
		&:hover,
		&:focus {
			filter: brightness(1.5);
		}
	}
	.control-button--active {
		border-color: $brand-color;
		pointer-events: none;
	}
</style>
