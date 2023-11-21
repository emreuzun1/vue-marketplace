<template>
  <dialog id="nft_modal" class="modal" ref="nftModalRef">
    <ModalContent :content="nft" @on-click="create" :isEdit="false" />
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
<script setup lang="ts">
import { type Ref, ref, inject } from "vue";
import type { NFT } from "@/types/nft.interface";
import ModalContent from "./ModalContent.vue";
import { createSale } from "@/utils/marketplace";
import { loadingStore } from "@/stores/loading";
defineProps<{ nft: NFT }>();
const { setLoading } = loadingStore();
const nftModalRef: Ref<HTMLDialogElement | null> = ref(null);

const create = (tokenId: number, price: number) => {
  setLoading(true);
  createSale(tokenId, price, onComplete, onDeny);
};

const onDeny = () => {
  setLoading(false);
};

const onComplete = () => {
  location.reload();
};

defineExpose({
  nftModalRef,
});
</script>
