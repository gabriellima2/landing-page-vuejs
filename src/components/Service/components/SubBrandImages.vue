<template>
	<ul>
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

<style scoped></style>
