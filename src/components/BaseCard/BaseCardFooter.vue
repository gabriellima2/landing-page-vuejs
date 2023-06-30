<template>
	<footer class="base-card-footer">
		<slot></slot>
	</footer>
</template>

<script setup lang="ts"></script>

<style scoped>
	.base-card-footer {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>
