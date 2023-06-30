<template>
	<div class="community-data">
		<slot></slot>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
	.community-data {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>
