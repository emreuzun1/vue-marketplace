import { ref } from "vue";
import { defineStore } from "pinia";

export const loadingStore = defineStore("loading", () => {
  const isLoading = ref<boolean>(false);

  const setLoading = (loading: boolean) => {
    isLoading.value = loading;
  };

  return { isLoading, setLoading };
});
