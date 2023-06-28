<template>
	<header class="header">
		<TheContainer class="header__content">
			<TheLogo />
			<Navigation :items="anchors" />
		</TheContainer>
	</header>
</template>

<script setup lang="ts">
	import Navigation from "./Navigation/Navigation.vue";
	import TheContainer from "./TheContainer.vue";
	import TheLogo from "./TheLogo.vue";

	import { anchors } from "../assets/anchors";
</script>

<style scoped lang="scss">
	@import "../styles/scss/main";
	.header {
		@include center(row);
		width: 100%;
		position: fixed;
		top: 0;
		background-color: #0000009a;
	}
	.header__content {
		flex: 1;
		height: 67px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
	}
</style>
