import { Ref, ref } from "vue";

type UseDynamicContentByIndexReturn = {
	currentIndex: Ref<number>;
	handleIndexChange: (index: number) => void;
};

export function useDynamicContentByIndex(): UseDynamicContentByIndexReturn {
	const currentIndex = ref(0);
	function handleIndexChange(index: number) {
		currentIndex.value = index;
	}
	return {
		currentIndex,
		handleIndexChange,
	};
}
