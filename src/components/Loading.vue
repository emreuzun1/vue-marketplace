<template>
  <dialog v-if="isLoading" id="loading_modal" class="modal" ref="modalRef">
    <div>
      <span class="loading w-24 loading-spinner text-primary"></span>
    </div>
  </dialog>
</template>
<script setup lang="ts">
import { watchEffect, ref } from "vue";
import { storeToRefs } from "pinia";
import { loadingStore } from "@/stores/loading";
const modalRef = ref<HTMLDialogElement | null>(null);
const store = loadingStore();
const { isLoading } = storeToRefs(store);
watchEffect(() => {
  if (isLoading) {
    modalRef.value?.showModal();
  }
});
</script>
