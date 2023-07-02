<template>
	<button>{{ text }}</button>
</template>

<script setup lang="ts">
	type ControlButtonProps = {
		text: string;
		isActive?: boolean;
	};
	defineProps<ControlButtonProps>();
</script>

<style scoped></style>
