<template>
	<li>
		<BaseCard>
			<div class="features-item__texts">
				<BaseCardTitle :class="title.toLowerCase()">{{ title }}</BaseCardTitle>
				<BaseCardParagraph>
					{{ paragraph }}
				</BaseCardParagraph>
			</div>
			<BaseCardFooter>
				<h2 class="features-item__data-title">{{ data.value }}</h2>
				<CommunityDataDescription>
					{{ data.label }}
				</CommunityDataDescription>
			</BaseCardFooter>
		</BaseCard>
	</li>
</template>

<script setup lang="ts">
	import CommunityDataDescription from "../../CommunityData/CommunityDataDescription.vue";
	import BaseCardParagraph from "../../BaseCard/BaseCardParagraph.vue";
	import BaseCardFooter from "../../BaseCard/BaseCardFooter.vue";
	import BaseCardTitle from "../../BaseCard/BaseCardTitle.vue";
	import BaseCard from "../../BaseCard/BaseCard.vue";

	export type FeaturesItemProps = {
		title: string;
		paragraph: string;
		data: { value: string; label: string };
	};
	defineProps<FeaturesItemProps>();
</script>

<style scoped lang="scss">
	@import "../../../styles/scss/main";
	.features-item__texts {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.features-item__data-title {
		font-weight: 400;
		font-size: 1.444rem;
		color: $font-primary-color;
	}
</style>
