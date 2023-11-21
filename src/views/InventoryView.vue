<template>
  <main class="flex items-center justify-center pt-4 px-8">
    <ul v-if="!loading" class="flex flex-wrap gap-4">
      <li v-for="nft in nfts" :key="nft.name">
        <NftCard :nft="nft">
          <template #btn>
            <NftCardButton :fn="() => openModal(nft)" buttonText="Sell" />
          </template>
        </NftCard>
      </li>
    </ul>
    <span v-else class="loading loading-spinner loading-lg text-primary"></span>
    <NftModal
      ref="nftModal"
      :isOpen="isModalOpen"
      :nft="selectedNft!"
      :is-loading="waitingTx"
    />
  </main>
</template>
<script setup lang="ts">
import { ref, watchEffect, type Ref } from "vue";
import NftModal from "@/components/NftModal.vue";
import NftCard from "@/components/NftCard.vue";
import NftCardButton from "@/components/NftCardButton.vue";
import { authStore } from "@/stores/auth";
import { getNfts } from "@/utils/interact";
import { type NFT } from "@/types/nft.interface";
const store = authStore();
const loading = ref<boolean>(false);
const nfts = ref<NFT[]>([]);
const selectedNft = ref<NFT>();
const isModalOpen = ref<boolean>(false);
const waitingTx = ref<boolean>(false);
const nftModal: Ref<null | { nftModalRef: HTMLDialogElement }> = ref(null);
watchEffect(() => {
  if (store.auth) {
    getNfts(store.auth).then((data) => (nfts.value = data));
  }
});

const openModal = (nft: NFT) => {
  selectedNft.value = nft;
  nftModal.value?.nftModalRef.showModal();
};
</script>
