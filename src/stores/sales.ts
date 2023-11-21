import { ref } from "vue";
import { defineStore } from "pinia";
import { getAllSales } from "@/utils/marketplace";
import type { Sale } from "@/types/sale.interface";

export const salesStore = defineStore("sales", () => {
  const sales = ref<Sale[]>();
  const loading = ref<boolean>(false);

  const getSales = () => {
    loading.value = true;
    getAllSales().then((res) => {
      sales.value = res;
      loading.value = false;
    });
  };

  return { sales, loading, getSales };
});
