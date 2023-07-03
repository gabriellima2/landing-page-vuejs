<template>
	<li>
		<ControlButton
			@click="handleServiceIndexChange"
			:title="text"
			:text="text"
			:is-active="isActive"
		/>
	</li>
</template>

<script setup lang="ts">
	import ControlButton from "../../ControlButton.vue";
	export type ServiceControlsItemProps = {
		text: string;
		isActive: boolean;
		handleServiceIndexChange: (serviceIndex: number) => void;
	};
	defineProps<ServiceControlsItemProps>();
</script>

<style scoped lang="scss">
	@import "../../../styles/scss/main";
</style>
