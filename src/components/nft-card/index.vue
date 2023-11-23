<template>
  <div class="card card-compact w-48 bg-base-100 shadow-xl overflow-hidden">
    <slot name="edit"></slot>
    <figure>
      <img :src="IpfsToHttps(nft.image)" :alt="nft.name" />
    </figure>
    <div class="card-body">
      <h2 class="card-title truncate">
        {{ nft.description + " " + nft.name }}
      </h2>
      <div class="card-actions justify-end">
        <slot name="btn"></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { NFT } from "@/types/nft.interface";
import { IpfsToHttps } from "@/utils/ipfsToHttps";
defineProps<{ nft: NFT }>();
</script>
