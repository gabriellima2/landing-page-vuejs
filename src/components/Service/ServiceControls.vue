<template>
	<ul class="service-controls">
		<ServiceControlsItem
			v-for="(name, index) of names"
			:key="name"
			:text="name"
			:handle-service-index-change="() => handleServiceIndexChange(index)"
			:is-active="index === currentServiceIndex"
		/>
	</ul>
</template>

<script setup lang="ts">
	import ServiceControlsItem, {
		type ServiceControlsItemProps,
	} from "./components/ServiceControlsItem.vue";
	type ServiceControlsProps = Pick<
		ServiceControlsItemProps,
		"handleServiceIndexChange"
	> & {
		names: string[];
		currentServiceIndex: number;
	};
	defineProps<ServiceControlsProps>();
</script>

<style scoped lang="scss">
	@import "../../styles/scss/main";
</style>
