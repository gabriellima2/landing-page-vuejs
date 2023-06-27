<template>
	<TheHeader />
	<main>
		<section class="hero">
			<div class="hero__texts">
				<h1>Powerful for developers Fast for everyone</h1>
				<p>
					Bring blockchain to the people. Solana supports experiences for power
					users, new consumers, and everyone in between.
				</p>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
	import TheHeader from "./components/TheHeader.vue";
</script>

<style scoped lang="scss">
	@import "./styles/scss/main";

	.hero {
		height: 85vh;
		max-width: 100%;
		min-height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-image: url("../public/hero-bg.png");
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
</style>
