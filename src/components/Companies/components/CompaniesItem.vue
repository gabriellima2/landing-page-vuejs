<template>
	<li class="companies-item" :aria-label="name">
		<img
			class="companies-item__img"
			:src="img.src"
			:alt="img.alt ?? `${name} Logo`"
		/>
	</li>
</template>

<script setup lang="ts">
	export type CompaniesItemProps = {
		name: string;
		img: { src: string; alt?: string };
	};
	defineProps<CompaniesItemProps>();
</script>

<style scoped lang="scss">
	@import "../../../styles/scss/main";
	.companies-item__img {
		width: 70px;
		height: 20px;
		@media screen and (min-width: $md-screen) {
			width: 80px;
			height: 30px;
		}
		@media screen and (min-width: $lg-screen) {
			width: 90px;
			height: 40px;
		}
	}
</style>
