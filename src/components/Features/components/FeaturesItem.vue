<template>
	<BaseCard :class="props.class">
		<div class="features-item__texts">
			<BaseCardTitle>{{ title }}</BaseCardTitle>
			<slot></slot>
		</div>
		<BaseCardFooter>
			<div>
				<Indicator v-if="hasIndicator" />
				<h2 class="features-item__data-title">{{ data.value }}</h2>
			</div>
			<CommunityDataDescription>
				{{ data.label }}
			</CommunityDataDescription>
		</BaseCardFooter>
	</BaseCard>
</template>

<script setup lang="ts">
	import CommunityDataDescription from "../../CommunityData/CommunityDataDescription.vue";
	import BaseCardFooter from "../../BaseCard/BaseCardFooter.vue";
	import BaseCardTitle from "../../BaseCard/BaseCardTitle.vue";
	import BaseCard from "../../BaseCard/BaseCard.vue";
	import Indicator from "../../Indicator.vue";

	export type FeaturesItemProps = {
		title: string;
		data: { value: string; label: string };
		class?: string;
		hasIndicator?: boolean;
	};
	const props = defineProps<FeaturesItemProps>();
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
