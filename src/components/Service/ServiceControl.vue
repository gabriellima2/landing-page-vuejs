<template>
	<ul>
		<li v-for="name of names" :key="name">
			<ControlButton :text="name" :is-active="isActiveService" />
		</li>
	</ul>
</template>

<script setup lang="ts">
	import ControlButton from "../ControlButton.vue";
	type ServiceControlProps = { names: string[]; isActiveService?: boolean };
	defineProps<ServiceControlProps>();
</script>

<style scoped></style>
