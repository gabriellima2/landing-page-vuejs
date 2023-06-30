import type { FeaturesItemProps } from "../components/Features/components/FeaturesItem.vue";

export const features: FeaturesItemProps[] = [
	{
		title: "Fast",
		paragraph:
			"Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.",
		data: { value: "3,969", label: "Transactions per second" },
	},
	{
		title: "Scalable",
		paragraph:
			"Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.",
		data: { value: "163,077,581,394", label: "Total transactions" },
	},
	{
		title: "Decentralized",
		paragraph:
			"The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.",
		data: { value: "1,675", label: "Validator Nodes" },
	},
	{
		title: "Energy Efficient",
		paragraph:
			"Solana’s proof of stake network and other innovations minimize its impact on the environment. Each Solana transaction uses about the same energy as a few Google searches.",
		data: { value: "0%", label: "Net carbon impact" },
	},
];
