<template>
	<nav>
		<ul class="list">
			<NavigationItem
				v-for="item of props.items"
				:key="item.text"
				:href="item.href"
				:title="item.title"
				:text="item.text"
			/>
		</ul>
	</nav>
</template>

<script setup lang="ts">
	import NavigationItem, {
		type NavigationItemProps,
	} from "./components/NavigationItem.vue";

	export type NavigationProps = {
		items: NavigationItemProps[];
	};

	const props = defineProps<NavigationProps>();
</script>

<style scoped>
	.list {
		display: flex;
		align-items: center;
		gap: 32px;
	}
</style>
