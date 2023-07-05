<template>
	<button class="language">
		<img src="/language-icon.svg" alt="Language icon" />
		EN
	</button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	@import "../styles/scss/main";
	.language {
		display: flex;
		gap: 8px;
		color: $font-secondary-color;
		font-size: $sm-font-size;
		text-transform: uppercase;
		background: none;
	}
</style>
