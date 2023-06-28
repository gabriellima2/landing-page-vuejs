<template>
	<a class="advertisement" v-bind="props">
		<slot></slot>
	</a>
</template>

<script setup lang="ts">
	import type { AnchorHTMLAttributes } from "vue";

	interface AdvertisementProps extends /* @vue-ignore */ AnchorHTMLAttributes {}
	const props = defineProps<AdvertisementProps>();
</script>

<style scoped lang="scss">
	@import "../styles/scss/main";
	.advertisement {
		@include center(row);
		width: 100%;
		max-width: auto;
		padding: 4px 24px;
		color: $main-color;
		font-family: $secondary-font;
		background: linear-gradient(
			to right,
			$util-light-blue-color 0%,
			$util-strong-blue-color 100%
		);
	}
</style>
