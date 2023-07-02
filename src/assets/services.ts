import type { ServiceProps } from "../components/Service/Service.vue";

export const services: ServiceProps[] = [
	{
		name: "NFTs",
		image: { src: "/services/nfts/main-image.png" },
		content: {
			brandImage: { src: "/services/nfts/anybodies.svg" },
			summary:
				"It’s time to bridge the digital and physical. Anybodies helps established brands like Toys’R’Us connect real-life places and products with NFTs.",
			learnMoreLink: { href: "#" },
		},
		subBrandImages: [
			{ src: "/services/nfts/nft-1.svg" },
			{ src: "/services/nfts/nft-2.svg" },
			{ src: "/services/nfts/nft-3.svg" },
			{ src: "/services/nfts/nft-4.svg" },
		],
	},
];
