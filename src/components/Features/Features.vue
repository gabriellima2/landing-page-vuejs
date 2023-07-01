<template>
	<div>
		<FeaturesItem
			title="Fast"
			class="fast-feature-card"
			:has-indicator="true"
			:data="{ value: '3,969', label: 'Transactions per second' }"
		>
			<BaseCardParagraph>
				Don’t keep your users waiting. Solana has block times of 400
				milliseconds — and as hardware gets faster, so will the network.
			</BaseCardParagraph>
		</FeaturesItem>
		<FeaturesItem
			title="Scalable"
			class="scalable-feature-card"
			:has-indicator="true"
			:data="{ value: '163,077,581,394', label: 'Total transactions' }"
		>
			<BaseCardParagraph>
				Get big, quick. Solana is made to handle thousands of transactions per
				second, and fees for both developers and users remain less than $0.01.
			</BaseCardParagraph>
		</FeaturesItem>
		<FeaturesItem
			title="Decentralized"
			class="decentralized-feature-card"
			:has-indicator="true"
			:data="{ value: '1,675', label: 'Validator Nodes' }"
		>
			<BaseCardParagraph>
				The Solana network is validated by thousands of nodes that operate
				independently of each other, ensuring your data remains secure and
				censorship resistant.
			</BaseCardParagraph>
		</FeaturesItem>
		<FeaturesItem
			title="Energy Efficient"
			class="energy-feature-card"
			:data="{ value: '0%', label: 'Net carbon impact' }"
		>
			<BaseCardParagraph>
				Solana’s proof of stake network and other innovations minimize its
				impact on the
				<a href="#" class="energy-feature-card__link">environment</a>. Each
				Solana transaction uses about the same energy as a few Google searches.
			</BaseCardParagraph>
		</FeaturesItem>
	</div>
</template>

<script setup lang="ts">
	import BaseCardParagraph from "../BaseCard/BaseCardParagraph.vue";
	import FeaturesItem from "./components/FeaturesItem.vue";
</script>

<style lang="scss">
	@import "../../styles/scss/main";
	.energy-feature-card__link {
		color: $util-light-green-color;
		text-decoration: underline;
	}
	.fast-feature-card .base-card-title__indicator {
		background-color: $util-light-blue-color;
	}
	.scalable-feature-card .base-card-title__indicator {
		background-color: $util-yellow-color;
	}
	.decentralized-feature-card .base-card-title__indicator {
		background-color: $brand-color;
	}
	.energy-feature-card .base-card-title__indicator {
		background-color: $util-light-green-color;
	}
</style>
