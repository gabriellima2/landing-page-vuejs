<template>
	<ul :class="props.class">
		<FeaturesItem
			v-for="feature of features"
			:key="feature.title"
			:title="feature.title"
			:paragraph="feature.paragraph"
			:data="feature.data"
		/>
	</ul>
</template>

<script setup lang="ts">
	import FeaturesItem, {
		type FeaturesItemProps,
	} from "./components/FeaturesItem.vue";
	type FeaturesProps = { features: FeaturesItemProps[]; class?: string };
	const props = defineProps<FeaturesProps>();
</script>

<style scoped></style>
