<template>
  <div class="modal-box" v-if="content">
    <h3 class="font-bold text-lg">
      {{ content.description + " " + content.name }}
    </h3>
    <div class="flex gap-2 items-center p-4">
      <img
        :src="IpfsToHttps(content.image)"
        :alt="content.name"
        class="w-48 rounded-xl"
      />
      <div class="flex flex-col gap-4" v-if="isEdit || approved">
        <div class="flex gap-1 items-center">
          <input
            type="number"
            class="input input-bordered input-primary w-full max-w-xs"
            step="0.001"
            min="0.001"
            v-model="price"
          />
          <p>ether</p>
        </div>
        <button
          class="w-full btn btn-sm btn-primary"
          @click="$emit('onClick', content.tokenId, price)"
        >
          <span v-if="!waitingTx">{{ isEdit ? "Edit" : "Sell" }}</span>
          <span v-else class="loading loading-spinner"></span>
        </button>
      </div>
      <div v-else class="w-full">
        <button class="w-full btn btn-sm btn-primary" @click="approveForAll">
          <span v-if="!waitingTx">Approve</span>
          <span v-else class="loading loading-spinner"></span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";
import type { NFT } from "@/types/nft.interface";
import type { Sale } from "@/types/sale.interface";
import { approveForAllRequest, checkForApproval } from "@/utils/interact";
import { IpfsToHttps } from "@/utils/ipfsToHttps";
const props = defineProps<{ content: Sale | NFT; isEdit: boolean }>();
const price = ref<number>(0.001);

const approved = ref<boolean>(false);
const waitingTx = ref<boolean>(false);

// Initially checks for approval for NFT.
watchEffect(async () => {
  if (props.content) {
    approved.value = await checkForApproval(props.content?.tokenId);
    price.value = Number(props.content.price) / 1e18;
  }
});

// After nft is approved, makes the changes.
const completeApproval = (isApproved: boolean) => {
  approved.value = isApproved;
  waitingTx.value = false;
};

// Make a request for approval
const approveForAll = async () => {
  waitingTx.value = true;
  approveForAllRequest(completeApproval);
};
</script>
