<template>
	<header class="header">
		<div class="container">
			<TheLogo />
			<Navigation :items="anchors" />
		</div>
	</header>
</template>

<script setup lang="ts">
	import Navigation from "./Navigation/Navigation.vue";
	import TheLogo from "./TheLogo.vue";

	import { anchors } from "../assets/anchors";
</script>

<style scoped lang="scss">
	@import "../styles/scss/main";
	.header {
		width: 100%;
		position: fixed;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0px 32px;
		background-color: #0000009a;
	}
	.container {
		flex: 1;
		max-width: 1140px;
		height: 67px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 32px;
	}
</style>
