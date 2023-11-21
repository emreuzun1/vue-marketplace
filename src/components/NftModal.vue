<template>
  <dialog id="nft_modal" class="modal" ref="nftModalRef">
    <div v-if="!isLoading">
      <ModalContent :content="nft" @on-click="create" :isEdit="false" />
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </div>
    <div v-else class="w-full flex items-center justify-center">
      <span class="loading loading-lg loading-spinner text-primary"></span>
    </div>
  </dialog>
</template>
<script setup lang="ts">
import { type Ref, ref } from "vue";
import type { NFT } from "@/types/nft.interface";
import ModalContent from "./ModalContent.vue";
import { createSale } from "@/utils/marketplace";
const isLoading = ref<boolean>(false);
defineProps<{ nft: NFT }>();
const nftModalRef: Ref<HTMLDialogElement | null> = ref(null);

const create = (tokenId: number, price: number) => {
  isLoading.value = true;
  createSale(tokenId, price, onComplete);
};

const onComplete = () => {
  location.reload();
};

defineExpose({
  nftModalRef,
});
</script>
