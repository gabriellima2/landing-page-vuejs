<template>
	<div class="content">
		<DataBlock
			value="11,000"
			label="Solana Hacker House participants"
			class="hacker-house"
		/>
		<img class="full" src="/community/image-3.png" />
		<DataBlock
			value="3,800"
			label="Solana Breakpoint 2022 attendees"
			class="solana-breakpoint"
		/>
		<img class="full-expanded lg" src="/community/image-2.png" />
		<img class="full" src="/community/image-1.png" />
		<img class="full-expanded middle" src="/community/image-4.png" />
		<DataBlock
			value="48,000"
			label="Developers building during Solana Hackathons"
			class="dev-hackathons"
		/>
		<img class="full" src="/community/image-5.png" />
	</div>
</template>

<script setup lang="ts">
	import DataBlock from "../../DataBlock.vue";
</script>

<style lang="scss">
	@import "../../../styles/scss/main";
	.content {
		height: 100%;
		display: grid;
		grid-template-columns: repeat(6, minmax(300px, 300px));
		grid-template-rows: repeat(2, 200px);
		gap: 32px;
		overflow: auto;
	}
	.full {
		width: 100%;
		height: 100%;
	}
	.full-expanded {
		width: 100%;
		height: 100%;
		background-color: blue;
		grid-row: 1/3;
	}
	.lg {
		grid-column: 2/4;
	}
	.hacker-house h1 {
		color: $util-pink-color;
	}
	.solana-breakpoint h1 {
		color: $util-yellow-color;
	}
	.dev-hackathons h1 {
		color: $util-light-green-color;
	}
</style>
