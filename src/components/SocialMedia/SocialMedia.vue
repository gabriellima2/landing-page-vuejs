<template>
	<ul class="social-media">
		<SocialMediaItem v-for="item of items" :key="item.name" v-bind="item" />
	</ul>
</template>

<script setup lang="ts">
	import SocialMediaItem, {
		type SocialMediaItemProps,
	} from "./components/SocialMediaItem.vue";
	type SocialMediaProps = { items: SocialMediaItemProps[] };
	defineProps<SocialMediaProps>();
</script>

<style scoped>
	.social-media {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
	}
</style>
