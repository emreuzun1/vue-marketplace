<template>
  <dialog id="sale_modal" class="modal" ref="modalRef">
    <ModalContent :content="sale" @on-click="edit" :isEdit="true" />
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
<script setup lang="ts">
import type { Sale } from "@/types/sale.interface";
import { ref, type Ref } from "vue";
import ModalContent from "../modal-content/index.vue";
import { editSale } from "@/utils/marketplace";
import { loadingStore } from "@/stores/loading";
const { setLoading } = loadingStore();
const props = defineProps<{ sale: Sale }>();
const modalRef: Ref<HTMLDialogElement | null> = ref(null);

const edit = (tokenId: number, price: number) => {
  setLoading(true);
  editSale(props.sale.saleId, price, onComplete, onDeny);
};

const onComplete = () => {
  location.reload();
};

const onDeny = () => {
  setLoading(false);
};

defineExpose({
  modalRef,
});
</script>
