<template>
	<InfiniteAutoScroll id="community-images">
		<template #content>
			<Content />
		</template>
	</InfiniteAutoScroll>
</template>

<script setup lang="ts">
	import InfiniteAutoScroll from "../InfiniteAutoScroll.vue";
	import Content from "./components/Content.vue";
</script>

<style scoped></style>
