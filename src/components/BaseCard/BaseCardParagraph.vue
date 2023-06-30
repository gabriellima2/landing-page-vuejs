<template>
	<p class="base-card-paragraph">
		<slot></slot>
	</p>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	@import "../../styles/scss/main";
	.base-card-paragraph {
		color: $font-secondary-color;
	}
</style>
