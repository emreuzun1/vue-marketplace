<template>
  <dialog id="nft_modal" class="modal" ref="nftModalRef">
    <ModalContent
      :content="nft"
      @on-click="(tokenId: number, price: number) => createSale(tokenId, price)"
      :isEdit="false"
    />
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
<script setup lang="ts">
import { type Ref, ref } from "vue";
import type { NFT } from "@/types/nft.interface";
import ModalContent from "./ModalContent.vue";
import { createSale } from "@/utils/marketplace";
defineProps<{ nft: NFT }>();
const nftModalRef: Ref<HTMLDialogElement | null> = ref(null);

defineExpose({
  nftModalRef,
});
</script>
