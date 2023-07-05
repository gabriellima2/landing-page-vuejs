<template>
	<li>
		<a class="social-media-item" target="_blank" rel="noreferrer" :title="name">
			<img
				class="social-media-item__icon"
				:src="icon.src"
				:alt="icon.alt ?? `${name} icon`"
			/>
		</a>
	</li>
</template>

<script setup lang="ts">
	import { Image } from "../../../@types/Image";
	export type SocialMediaItemProps = {
		name: string;
		url: string;
		icon: Image;
	};
	defineProps<SocialMediaItemProps>();
</script>

<style scoped lang="scss">
	@import "../../../styles/scss/main";
	.social-media-item {
		@include center(row);
		padding: 1px 6px;
		border-radius: 2px;
		cursor: pointer;
		background-color: $font-secondary-color;
		transition: opacity 0.2s ease;
		&:hover,
		&:focus {
			opacity: 0.7;
		}
	}
	.social-media-item__icon {
		width: 16px;
		height: 16px;
	}
</style>
