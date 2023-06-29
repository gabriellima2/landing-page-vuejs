<template>
	<ul :class="`companies ${props.class}`">
		<CompaniesItem
			v-for="item of items"
			:key="item.name"
			:name="item.name"
			:img="item.img"
		/>
	</ul>
</template>

<script setup lang="ts">
	import CompaniesItem, {
		type CompaniesItemProps,
	} from "./components/CompaniesItem.vue";

	type CompaniesProps = { items: CompaniesItemProps[]; class?: string };
	const props = defineProps<CompaniesProps>();
</script>

<style scoped lang="scss">
	@import "../../styles/scss/main";
	.companies {
		display: flex;
		flex-wrap: wrap;
		gap: 40px;
		@media screen and (min-width: $md-screen) {
			justify-content: center;
		}
	}
</style>
