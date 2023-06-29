<template>
	<h3 class="platform-data-description"><slot></slot></h3>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	@import "../styles/scss/main";
	.platform-data-description {
		font-family: $secondary-font;
		font-size: $sm-font-size;
		text-transform: uppercase;
		font-weight: 400;
		color: $font-secondary-color;
	}
</style>
