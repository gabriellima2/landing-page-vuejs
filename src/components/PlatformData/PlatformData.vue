<template>
	<div class="platform-data">
		<PlatformDataItem
			value="11.5M+"
			description="Active Accounts"
			class="platform-data__accounts"
		/>
		<PlatformDataItem
			value="21.9M"
			description="NFTS Minted"
			class="platform-data__nfts"
		/>
		<PlatformDataItem
			value="$0.00025"
			description="Average Cost Per Transaction"
			class="platform-data__transaction"
		/>
	</div>
</template>

<script setup lang="ts">
	import PlatformDataItem from "./components/PlatformDataItem.vue";
</script>

<style scoped lang="scss">
	@import "../../styles/scss/main";
	.platform-data {
		display: flex;
		flex-direction: column;
		gap: 48px;
	}
	.platform-data__accounts {
		@include set-gradient-text($brand-color, $util-light-green-color);
	}
	.platform-data__nfts {
		@include set-gradient-text($util-strong-blue-color, $util-light-blue-color);
	}
	.platform-data__transaction {
		@include set-gradient-text($util-cyan-color, $util-dark-blue-color);
	}
</style>
