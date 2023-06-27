<template>
	<li class="navigation-item">
		<a
			class="navigation-item__link"
			v-bind="props"
			:title="props.title ?? `Go to ${props.text}`"
			>{{ text }}
		</a>
		<img
			src="../../../../public/chevron-down.svg"
			alt="Arrow"
			class="navigation-item__arrow"
		/>
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
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
	}
	.navigation-item__link {
		color: $font-secondary-color;
		&:hover,
		&:focus {
			filter: brightness($default-brightness);
		}
		&:hover ~ .navigation-item__arrow,
		&:focus ~ .navigation-item__arrow {
			filter: brightness($default-brightness);
		}
	}
	.navigation-item__arrow {
		width: 24px;
		height: 24px;
	}
</style>
