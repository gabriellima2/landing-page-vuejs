<template>
	<section class="others-navigation">
		<h1 class="others-navigation__title">
			{{ title }}
		</h1>
		<ul class="others-navigation__list">
			<OthersNavigationItem
				v-for="item of items"
				:key="item.text"
				v-bind="item"
			/>
		</ul>
	</section>
</template>

<script setup lang="ts">
	import OthersNavigationItem, {
		type OthersNavigationItemProps,
	} from "./components/OthersNavigationItem.vue";
	type OthersNavigationProps = {
		title: string;
		items: OthersNavigationItemProps[];
	};
	defineProps<OthersNavigationProps>();
</script>

<style scoped lang="scss">
	@import "../../styles/scss/main";
	.others-navigation {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.others-navigation__title {
		font-weight: 400;
		font-size: $sm-font-size;
		text-transform: uppercase;
	}
	.others-navigation__list {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>
