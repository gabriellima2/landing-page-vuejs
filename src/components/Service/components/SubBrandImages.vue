<template>
	<ul class="sub-brand-images">
		<li v-for="image of images" :key="image.src">
			<img :src="image.src" />
		</li>
	</ul>
</template>

<script setup lang="ts">
	import type { Image } from "../../../@types/Image";
	type SubBrandImagesProps = { images: Image[] };
	defineProps<SubBrandImagesProps>();
</script>

<style scoped lang="scss">
	.sub-brand-images {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 132px;
		overflow-x: auto;
	}
</style>
