<template>
	<TheHeader
		:advertisement="{
			href: '#',
			text: 'Breakpoint 2023 - New City. New Vibes - Get Early Access ->',
		}"
	/>
	<main>
		<section class="hero">
			<TheContainer>
				<div class="hero__texts">
					<h1>Powerful for developers Fast for everyone</h1>
					<p>
						Bring blockchain to the people. Solana supports experiences for
						power users, new consumers, and everyone in between.
					</p>
				</div>
				<div class="hero__buttons">
					<BaseButton title="Start">Start Building</BaseButton>
					<BaseButton title="Docs" :bordered="true">Read Docs</BaseButton>
				</div>
			</TheContainer>
		</section>
	</main>
</template>

<script setup lang="ts">
	import TheContainer from "./components/TheContainer.vue";
	import BaseButton from "./components/BaseButton.vue";
	import TheHeader from "./components/TheHeader.vue";
</script>

<style scoped lang="scss">
	@import "./styles/scss/main";
	.hero {
		@include center(column);
		height: 85vh;
		max-width: 100%;
		min-height: 100%;
		background-image: url("/hero-bg.png");
		background-repeat: no-repeat;
		background-size: cover;
		padding-top: 67px;
	}
	.hero__texts {
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
	.hero__buttons {
		display: flex;
		gap: 24px;
		margin-top: 52px;
		@media screen and (min-width: $md-screen) {
			align-items: center;
			justify-content: center;
		}
	}
</style>
