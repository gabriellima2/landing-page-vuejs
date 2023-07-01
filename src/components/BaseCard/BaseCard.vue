<template>
	<article class="base-card">
		<slot></slot>
	</article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	.base-card {
		display: flex;
		flex-direction: column;
		gap: 32px;
		width: 100%;
		border-radius: 24px;
		padding: 32px;
		backdrop-filter: blur(10px);
		background-color: #0000009a;
	}
</style>
