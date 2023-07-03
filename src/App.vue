<template>
	<TheHeader
		:advertisement="{
			href: '#',
			text: 'Breakpoint 2023 - New City. New Vibes - Get Early Access ->',
		}"
	/>
	<main>
		<section class="hero-section">
			<TheContainer class="hero-content">
				<div class="hero-content__texts">
					<h1>Powerful for developers. Fast for everyone.</h1>
					<p>
						Bring blockchain to the people. Solana supports experiences for
						power users, new consumers, and everyone in between.
					</p>
				</div>
				<div class="hero-content__buttons">
					<BaseButton title="Start">Start Building</BaseButton>
					<BaseButton title="Docs" :bordered="true">Read Docs</BaseButton>
				</div>
				<footer class="hero-companies">
					<h2 class="hero-companies__title">
						Powering tools and integrations from companies all around the world
					</h2>
					<Companies :items="companies" />
				</footer>
			</TheContainer>
		</section>
		<section class="community-section">
			<TheContainer>
				<section class="row-section">
					<SectionTitle
						class="row-section__title community-section__platform-data-title"
					>
						Join a community of millions.
					</SectionTitle>
					<PlatformData />
				</section>
				<section class="row-section">
					<div>
						<SectionTitle
							class="row-section__title community-section__features-title"
						>
							Made for mass adoption
						</SectionTitle>
						<small class="community-section__features-live">
							<Indicator />
							LIVE DATA
						</small>
					</div>
					<Features />
				</section>
			</TheContainer>
		</section>
		<section>
			<div>
				<header>
					<ServiceControls
						:names="serviceNames"
						:current-service-index="dynamicService.currentIndex.value"
						:handle-service-index-change="dynamicService.handleIndexChange"
					/>
				</header>
				<section>
					<Service v-bind="currentService" />
				</section>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
	import { computed } from "vue";

	import { useDynamicContentByIndex } from "./composables/useDynamicContentByIndex";

	import PlatformData from "./components/PlatformData/PlatformData.vue";
	import ServiceControls from "./components/Service/ServiceControls.vue";
	import Companies from "./components/Companies/Companies.vue";
	import Features from "./components/Features/Features.vue";
	import Service from "./components/Service/Service.vue";
	import TheContainer from "./components/TheContainer.vue";
	import SectionTitle from "./components/SectionTitle.vue";
	import BaseButton from "./components/BaseButton.vue";
	import TheHeader from "./components/TheHeader.vue";
	import Indicator from "./components/Indicator.vue";

	import { companies } from "./assets/companies";
	import { services } from "./assets/services";

	const dynamicService = useDynamicContentByIndex();
	const serviceNames = computed(() => services.map((service) => service.name));
	const currentService = computed(
		() => services[dynamicService.currentIndex.value]
	);
</script>

<style scoped lang="scss">
	@import "./styles/scss/main";
	.hero-section {
		@include center(column);
		max-width: 100%;
		background-image: url("/hero-bg.png");
		background-repeat: no-repeat;
		background-size: cover;
		padding-top: 217px;
	}
	.hero-content {
		@include center(column);
	}
	.hero-content__texts {
		max-width: 780px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 32px;

		& > h1 {
			white-space: nowrap;
			font-size: $xl-font-size;
			white-space: pre-wrap;
			font-weight: 500;
		}
		@media screen and (min-width: $md-screen) {
			align-items: center;
			& > p,
			& > h1 {
				text-align: center;
			}
			& > h1 {
				max-width: 24ch;
				font-size: $xxl-font-size;
			}
		}
	}
	.hero-content__buttons {
		display: flex;
		gap: 24px;
		margin-top: 52px;
		flex-wrap: wrap;
		@media screen and (min-width: $md-screen) {
			align-items: center;
			justify-content: center;
		}
	}
	.hero-companies {
		@include center(column);
		gap: 34px;
		margin-top: 120px;
	}
	.hero-companies__title {
		font-weight: 400;
		text-transform: uppercase;
		color: $font-tertiary-color;
		font-size: $default-font-size;
		@media screen and (min-width: $md-screen) {
			text-align: center;
		}
	}
	.row-section {
		display: flex;
		width: 100%;
		justify-content: space-between;
		gap: 48px;
		flex-wrap: wrap;
		margin-top: 120px;
	}
	.row-section__title {
		@media screen and (min-width: $md-screen) {
			margin-top: 64px;
		}
	}
	.community-section {
		@include center(column);
		width: 100%;
		max-width: 100%;
		background-image: url("/community-bg.png");
		background-repeat: no-repeat;
		background-size: cover;
	}
	.community-section__platform-data-title {
		width: 300px;
	}
	.community-section__features-title {
		width: 250px;
	}
	.community-section__features-live {
		display: flex;
		gap: 6px;
		margin-top: 8px;
		color: $util-gray-color;
	}
</style>
