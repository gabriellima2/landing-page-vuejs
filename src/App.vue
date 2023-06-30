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
		<section class="details-section">
			<TheContainer>
				<section class="row-section">
					<SectionTitle class="community-title">
						Join a community of millions.
					</SectionTitle>
					<div class="community-content">
						<CommunityData>
							<CommunityDataValue class="community-accounts">
								11.5M+
							</CommunityDataValue>
							<CommunityDataDescription>
								Active Accounts
							</CommunityDataDescription>
						</CommunityData>
						<CommunityData>
							<CommunityDataValue class="community-nfts">
								21.9M
							</CommunityDataValue>
							<CommunityDataDescription>NFTS Minted</CommunityDataDescription>
						</CommunityData>
						<CommunityData>
							<CommunityDataValue class="community-transactions">
								$0.00025
							</CommunityDataValue>
							<CommunityDataDescription>
								Average Cost Per Transaction
							</CommunityDataDescription>
						</CommunityData>
					</div>
				</section>
			</TheContainer>
		</section>
	</main>
</template>

<script setup lang="ts">
	import CommunityDataDescription from "./components/CommunityData/CommunityDataDescription.vue";
	import CommunityDataValue from "./components/CommunityData/CommunityDataValue.vue";
	import CommunityData from "./components/CommunityData/CommunityDataValue.vue";
	import Companies from "./components/Companies/Companies.vue";
	import TheContainer from "./components/TheContainer.vue";
	import SectionTitle from "./components/SectionTitle.vue";
	import BaseButton from "./components/BaseButton.vue";
	import TheHeader from "./components/TheHeader.vue";

	import { companies } from "./assets/companies";
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
		@include center(row);
		width: 100%;
		justify-content: space-between;
		gap: 48px;
		flex-wrap: wrap;
	}
	.details-section {
		@include center(column);
		width: 100%;
		padding: 120px 0px;
	}
	.community-title {
		width: 300px;
	}
	.community-content {
		display: flex;
		flex-direction: column;
		gap: 48px;
	}
	.community-accounts {
		@include set-gradient-text($brand-color, $util-light-green-color);
	}
	.community-nfts {
		@include set-gradient-text($util-strong-blue-color, $util-light-blue-color);
	}
	.community-transactions {
		@include set-gradient-text($util-cyan-color, $util-dark-blue-color);
	}
</style>
