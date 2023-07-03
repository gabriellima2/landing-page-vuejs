<template>
	<div class="infinite-auto-scroll">
		<div class="infinite-auto-scroll__content initial">
			<slot name="content"></slot>
		</div>
		<div class="infinite-auto-scroll__content end">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	.infinite-auto-scroll {
		display: flex;
		position: relative;
		width: 100vw;
	}
	.infinite-auto-scroll__content {
		display: flex;
		gap: 32px;
		position: absolute;
		left: 0%;
		top: 0%;
	}
	@keyframes initial {
		from {
			left: 0%;
		}
		to {
			left: -100%;
		}
	}
	@keyframes end {
		from {
			left: 100%;
		}
		to {
			left: 0%;
		}
	}
	.initial {
		animation: initial 3s linear infinite;
	}
	.end {
		animation: end 3s linear infinite;
	}
</style>
