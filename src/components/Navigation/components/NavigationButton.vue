<template>
	<button
		class="navigation-button"
		:title="props.isOpen ? 'Fechar Menu' : 'Abrir Menu'"
		@click="handleClick"
	>
		{{ props.isOpen ? "Fechar" : "Menu" }}
	</button>
</template>

<script setup lang="ts">
	type NavigationButtonProps = { isOpen: boolean; handleClick: () => void };
	const props = defineProps<NavigationButtonProps>();
</script>

<style scoped lang="scss">
	@import "../../../styles/scss/main";
	.navigation-button {
		padding: 8px;
		color: $font-secondary-color;
		font-size: $default-font-size;
		background: none;
		&:hover,
		&:focus {
			color: $font-primary-color;
		}
	}
</style>
