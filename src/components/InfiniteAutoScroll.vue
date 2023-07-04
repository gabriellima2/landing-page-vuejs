<template>
	<div class="infinite-auto-scroll">
		<div class="infinite-auto-scroll__content">
			<slot name="content"></slot>
		</div>
		<div class="infinite-auto-scroll__content">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.infinite-auto-scroll {
		display: flex;
		gap: 32px;
		overflow: hidden;
	}
	.infinite-auto-scroll__content {
		animation: slide 10s linear infinite;
	}
	@keyframes slide {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-101.5%);
		}
	}
</style>
