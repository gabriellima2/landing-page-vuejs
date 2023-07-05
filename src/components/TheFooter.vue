<template>
	<footer class="footer">
		<TheContainer class="footer-content">
			<section class="more-info">
				<div class="about">
					<MinimalistLogo />
					<small class="about__label">Managed by Solana Foundation</small>
				</div>
				<SocialMedia :items="socialMedia" />
				<Copyright />
			</section>
			<section class="interactions">
				<OthersNavigation title="Solana" :items="solana" />
				<OthersNavigation title="Get Connected" :items="getConnected" />
				<Language />
			</section>
		</TheContainer>
	</footer>
</template>

<script setup lang="ts">
	import OthersNavigation from "./OthersNavigation/OthersNavigation.vue";
	import SocialMedia from "./SocialMedia/SocialMedia.vue";
	import MinimalistLogo from "./MinimalistLogo.vue";
	import TheContainer from "./TheContainer.vue";
	import Copyright from "./Copyright.vue";
	import Language from "./Language.vue";

	import { getConnected } from "../assets/get-connected";
	import { socialMedia } from "../assets/social-media";
	import { solana } from "../assets/solana";
</script>

<style scoped lang="scss">
	@import "../styles/scss/main";
	.footer {
		@include center(row);
		border-top: 1px solid $contrast-secondary-color;
		padding: 120px 0px;
	}
	.footer-content {
		display: flex;
		justify-content: space-between;
		gap: 72px;
		flex-wrap: wrap;
	}
	.more-info {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.about {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.about__label {
		color: $font-secondary-color;
		font-size: $sm-font-size;
		font-family: $secondary-font;
	}
	.interactions {
		display: flex;
		gap: 72px;
		flex-wrap: wrap;
	}
</style>
