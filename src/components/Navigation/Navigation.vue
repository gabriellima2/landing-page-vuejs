<template>
	<NavigationButton
		class="menu-mobile-button"
		:is-open="isOpen"
		:handle-click="toggleMenu"
	/>
	<nav :class="`navigation ${isOpen && 'navigation--open'}`">
		<ul class="list">
			<NavigationItem
				v-for="item of props.items"
				:key="item.text"
				:href="item.href"
				:title="item.title"
				:text="item.text"
			/>
		</ul>
	</nav>
</template>

<script setup lang="ts">
	import { onMounted, onUnmounted, ref } from "vue";

	import NavigationButton from "./components/NavigationButton.vue";
	import NavigationItem, {
		type NavigationItemProps,
	} from "./components/NavigationItem.vue";

	export type NavigationProps = {
		items: NavigationItemProps[];
	};

	const props = defineProps<NavigationProps>();
	const isOpen = ref(false);

	function toggleMenu() {
		isOpen.value = !isOpen.value;
	}

	function closeMenu() {
		isOpen.value = false;
	}

	onMounted(() => {
		window.addEventListener("resize", closeMenu);
		window.addEventListener("scroll", closeMenu);
	});
	onUnmounted(() => {
		window.removeEventListener("resize", closeMenu);
		window.removeEventListener("scroll", closeMenu);
	});
</script>

<style scoped lang="scss">
	@import "../../styles/scss/main";
	.navigation {
		display: none;
		@media screen and (min-width: $md-screen) {
			display: block;
		}
	}
	.navigation--open {
		@include center(row);
		justify-content: flex-start;
		width: 100vw;
		height: 100vh;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1000;
		padding: 0px 24px;
		background-color: $main-color;
	}
	.list {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 44px;
		@media screen and (min-width: $md-screen) {
			width: auto;
			align-items: center;
			flex-direction: row;
			gap: 32px;
		}
	}
	.menu-mobile-button {
		z-index: 10000;
		@media screen and (min-width: $md-screen) {
			display: none;
		}
	}
</style>
