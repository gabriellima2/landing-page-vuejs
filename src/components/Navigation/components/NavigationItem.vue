<template>
	<li class="navigation-item">
		<a
			class="navigation-item__link"
			v-bind="props"
			:title="props.title ?? `Go to ${props.text}`"
			>{{ text }}
		</a>
		<img src="/chevron-down.svg" alt="Arrow" class="navigation-item__arrow" />
	</li>
</template>

<script setup lang="ts">
	export type NavigationItemProps = {
		href: string;
		text: string;
		title?: string;
	};
	const props = defineProps<NavigationItemProps>();
</script>

<style scoped lang="scss">
	@import "../../../styles/scss/main";
	$default-brightness: 5;
	.navigation-item {
		@include center(row);
		justify-content: flex-start;
		gap: 4px;
		@media screen and (min-width: $md-screen) {
			justify-content: center;
		}
	}
	.navigation-item__link {
		display: block;
		width: 100%;
		color: $font-secondary-color;
		transition: all 0.2s ease;
		&:hover,
		&:focus {
			filter: brightness($default-brightness);
		}
		& ~ .navigation-item__arrow {
			transition: all 0.2s ease;
		}
		&:hover ~ .navigation-item__arrow,
		&:focus ~ .navigation-item__arrow {
			filter: brightness($default-brightness);
		}
		@media screen and (min-width: $md-screen) {
			display: inline-block;
			width: auto;
		}
	}
	.navigation-item__arrow {
		width: 24px;
		height: 24px;
	}
</style>
