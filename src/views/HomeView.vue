<script setup lang="ts">
import { watchEffect, computed, ref, type Ref } from "vue";
import { authStore } from "@/stores/auth";
import { salesStore } from "@/stores/sales";
import SaleModal from "@/components/SaleModal.vue";
import NftCard from "@/components/NftCard.vue";
import NftCardButton from "@/components/NftCardButton.vue";
import { buyNft, cancelSale } from "@/utils/marketplace";
import editSvg from "@/assets/icons/edit.svg";
import cancelSvg from "@/assets/icons/cancel.svg";
import type { Sale } from "@/types/sale.interface";
const store = authStore();
const saleStore = salesStore();
const modal: Ref<null | { modalRef: HTMLDialogElement }> = ref(null);
const selectedSale = ref<Sale>();
const loading = computed(() => {
  return store.auth && saleStore.loading;
});

watchEffect(async () => {
  saleStore.getSales();
});

const editSale = (sale: Sale) => {
  selectedSale.value = sale;
  modal?.value?.modalRef.showModal();
};

// Any account changes in metamask, will be listen by this function
store.accountListener();
</script>

<template>
  <main class="flex items-center justify-center pt-4">
    <ul v-if="!loading && saleStore.sales" class="flex flex-wrap gap-4">
      <li
        v-if="saleStore.sales!.length > 0"
        v-for="sale in saleStore.sales"
        :key="sale.name"
      >
        <NftCard :nft="sale" class="group">
          <template
            #edit
            v-if="sale.owner.toLowerCase() === store.auth?.toLowerCase()"
          >
            <button
              class="absolute w-24 h-24 transition-all ease-in-out bg-white rounded-full -right-24 -top-24 btn btn-primary group-hover:-right-12 group-hover:-top-12"
              @click="cancelSale(sale.saleId)"
            >
              <img
                :src="cancelSvg"
                alt="cancel"
                class="absolute left-4 bottom-4"
              />
            </button>
            <button
              class="absolute w-24 h-24 transition-all ease-in-out bg-white rounded-full -left-24 -top-24 btn btn-primary group-hover:-left-12 group-hover:-top-12"
              @click="editSale(sale)"
            >
              <img
                :src="editSvg"
                alt="edit"
                class="absolute right-4 bottom-4"
              />
            </button>
          </template>
          <template #btn>
            <NftCardButton
              :fn="() => buyNft(sale.saleId, sale.price)"
              :label="Number(sale.price) / 1e18 + ' ETH '"
              buttonText="Buy"
            />
          </template>
        </NftCard>
      </li>
      <p v-else>Every NFT has bought! You are late!</p>
    </ul>
    <span v-else class="loading loading-spinner loading-lg text-primary"></span>
    <SaleModal ref="modal" :sale="selectedSale!" />
  </main>
</template>
