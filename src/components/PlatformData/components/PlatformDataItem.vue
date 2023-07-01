<template>
	<div :class="`plaform-data-item ${props.class}`">
		<h1 class="platform-data-item__value">{{ value }}</h1>
		<h2 class="platform-data-item__description">{{ description }}</h2>
	</div>
</template>

<script setup lang="ts">
	type PlatformDataItemProps = {
		value: string;
		description: string;
		class?: string;
	};
	const props = defineProps<PlatformDataItemProps>();
</script>

<style scoped lang="scss">
	@import "../../../styles/scss/main";
	.platform-data-item {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.platform-data-item__value {
		font-size: $xl-font-size;
		text-transform: uppercase;
		font-weight: 400;
		@media screen and (min-width: $md-screen) {
			font-size: $xxl-font-size;
		}
	}
	.platform-data-item__description {
		font-family: $secondary-font;
		font-size: $sm-font-size;
		text-transform: uppercase;
		font-weight: 400;
		color: $font-secondary-color;
	}
</style>
