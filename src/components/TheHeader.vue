<template>
	<header class="header">
		<Advertisement v-if="!!advertisement" :href="advertisement.href">{{
			advertisement.text
		}}</Advertisement>
		<TheContainer class="header__content">
			<TheLogo />
			<Navigation :items="anchors" />
		</TheContainer>
	</header>
</template>

<script setup lang="ts">
	import Navigation from "./Navigation/Navigation.vue";
	import Advertisement from "./Advertisement.vue";
	import TheContainer from "./TheContainer.vue";
	import TheLogo from "./TheLogo.vue";

	import { anchors } from "../assets/anchors";

	type TheHeaderProps = { advertisement?: { href: string; text: string } };
	defineProps<TheHeaderProps>();
</script>

<style scoped lang="scss">
	@import "../styles/scss/main";
	.header {
		@include center(column);
		width: 100%;
		position: fixed;
		top: 0;
		background-color: #0000009a;
		backdrop-filter: blur(10px);
	}
	.header__content {
		width: 100%;
		flex: 1;
		padding-top: 20px;
		padding-bottom: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
	}
</style>
