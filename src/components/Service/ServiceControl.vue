<template>
	<ul>
		<li v-for="(name, index) of names" :key="name">
			<ControlButton
				@click="() => handleServiceIndexChange(index)"
				:text="name"
				:is-active="index === currentServiceIndex"
			/>
		</li>
	</ul>
</template>

<script setup lang="ts">
	import ControlButton from "../ControlButton.vue";
	type ServiceControlProps = {
		names: string[];
		currentServiceIndex: number;
		handleServiceIndexChange: (serviceIndex: number) => void;
	};
	defineProps<ServiceControlProps>();
</script>

<style scoped></style>
