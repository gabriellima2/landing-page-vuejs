<template>
	<li>
		<a class="others-navigation-item" :href="text" :title="text">{{ text }}</a>
	</li>
</template>

<script setup lang="ts">
	import type { Link } from "../../../@types/Link";
	export type OthersNavigationItemProps = Omit<Link, "text"> & { text: string };
	defineProps<OthersNavigationItemProps>();
</script>

<style scoped lang="scss">
	@import "../../../styles/scss/main";
	.others-navigation-item {
		text-transform: capitalize;
		color: $font-secondary-color;
		font-size: $sm-font-size;
		&:hover,
		&:focus {
			text-decoration: underline;
		}
	}
</style>
