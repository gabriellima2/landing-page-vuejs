<template>
	<article>
		<div>
			<img :src="image.src" />
			<section>
				<img :src="content.brandImage.src" />
				<p>
					{{ content.summary }}
				</p>
				<a :href="content.learnMoreLink.href"
					>Learn more about {{ name }} on Solana</a
				>
			</section>
		</div>
		<footer>
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

<style scoped></style>
