<template>
	<article class="service">
		<section class="service-main">
			<img
				:src="image.src"
				:alt="image.alt ?? 'Service Image'"
				class="service-main__image"
			/>
			<div class="service-content">
				<img
					:src="content.brandImage.src"
					:alt="image.alt ?? 'Brand Image'"
					class="service-content__brand-image"
				/>
				<p>
					{{ content.summary }}
				</p>
				<a
					:href="content.learnMoreLink.href"
					class="service-content__learn-more"
				>
					Learn more about {{ name }} on Solana
				</a>
			</div>
		</section>
		<footer class="service__footer">
			<SubBrandImages :images="subBrandImages" />
		</footer>
	</article>
</template>

<script setup lang="ts">
	import SubBrandImages from "./components/SubBrandImages.vue";
	import type { Image } from "../../@types/Image";
	import type { Link } from "../../@types/Link";
	export type ServiceProps = {
		name: string;
		image: Image;
		content: {
			brandImage: Image;
			summary: string;
			learnMoreLink: Link;
		};
		subBrandImages: Image[];
	};
	defineProps<ServiceProps>();
</script>

<style scoped lang="scss">
	@import "../../styles/scss/main";
	$width: 550px;
	.service {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.service-main {
		width: fit-content;
		display: grid;
		grid-template-rows: 1fr 0.5fr;
		place-items: center;
		border-radius: 12px;
		background-color: $contrast-secondary-color;
		@media screen and (min-width: $md-screen) {
			grid-template-columns: repeat(2, minmax(200px, $width));
			grid-template-rows: auto;
		}
	}
	.service-main__image {
		width: 100%;
		max-width: $width;
		height: 100%;
	}
	.service-content {
		display: flex;
		flex-direction: column;
		gap: 14px;
		max-width: $width;
		padding: 44px;
	}
	.service-content__brand-image {
		max-width: 240px;
		height: 52px;
	}
	.service-content__learn-more {
		color: $brand-color;
		&:hover,
		&:focus {
			text-decoration: underline;
		}
	}
	.service__footer {
		max-width: $width;
		padding: 16px;
		border-radius: 16px;
		background-color: #261f264f;
		@media screen and (min-width: $md-screen) {
			max-width: $width * 2;
		}
	}
</style>
