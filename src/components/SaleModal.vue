<template>
  <dialog id="sale_modal" class="modal" ref="modalRef">
    <ModalContent
      :content="sale"
      @on-click="(tokenId: number, price: number) => editSale(sale.saleId, price)"
      :isEdit="true"
    />
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
<script setup lang="ts">
import type { Sale } from "@/types/sale.interface";
import { ref, type Ref } from "vue";
import ModalContent from "./ModalContent.vue";
import { editSale } from "@/utils/marketplace";
defineProps<{ sale: Sale }>();
const modalRef: Ref<HTMLDialogElement | null> = ref(null);
defineExpose({
  modalRef,
});
</script>
