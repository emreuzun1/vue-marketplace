<template>
  <dialog id="sale_modal" class="modal" ref="modalRef">
    <div v-if="!isLoading">
      <ModalContent :content="sale" @on-click="edit" :isEdit="true" />
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
import type { Sale } from "@/types/sale.interface";
import { ref, type Ref } from "vue";
import ModalContent from "./ModalContent.vue";
import { editSale } from "@/utils/marketplace";
const isLoading = ref<boolean>(false);
const props = defineProps<{ sale: Sale }>();
const modalRef: Ref<HTMLDialogElement | null> = ref(null);

const edit = (tokenId: number, price: number) => {
  isLoading.value = true;
  editSale(props.sale.saleId, price, onComplete);
};

const onComplete = () => {
  location.reload();
};

defineExpose({
  modalRef,
});
</script>
