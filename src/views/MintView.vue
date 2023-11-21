<template>
  <div class="w-screen h-screen flex flex-col items-center pt-24">
    <img :src="src" alt="nft" class="w-96 h-96 rounded-xl" />
    <p class="font-bold text-3xl mt-4">AdessoOKR NFT</p>
    <div class="flex gap-3 items-center justify-center mt-3">
      <button
        class="btn btn-primary btn-square btn-sm"
        @click="quantityAction(false)"
      >
        -
      </button>
      <p class="font-bold text-2xl">{{ mintQuantity }}</p>
      <button
        class="btn btn-primary btn-square btn-sm"
        @click="quantityAction(true)"
      >
        +
      </button>
    </div>
    <button
      class="btn btn-neutral mt-2"
      :disabled="!!!store.auth"
      @click="_mint"
    >
      Mint Now!
    </button>
    <p class="text-3xl mt-4">
      Price : {{ (0.001 * mintQuantity).toFixed(3) }} Eth
    </p>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { authStore } from "@/stores/auth";
import { loadingStore } from "@/stores/loading";
import { mint } from "@/utils/interact";
const { setLoading } = loadingStore();
const store = authStore();
const mintQuantity = ref<number>(1);
const srcIndex = ref<number>(1);
const src = computed<string>(() => {
  return `/nfts/${srcIndex.value}.png`;
});
setInterval(() => {
  srcIndex.value = (srcIndex.value % 10) + 1;
}, 1500);

const _mint = () => {
  setLoading(true);
  mint(mintQuantity.value, onComplete, onDeny);
};

const onComplete = () => {
  location.reload();
};

const onDeny = () => {
  setLoading(false);
};

const quantityAction = (add: boolean) => {
  if (add && mintQuantity.value < 50) {
    mintQuantity.value++;
  } else {
    if (mintQuantity.value === 1) return;
    mintQuantity.value--;
  }
};
</script>
