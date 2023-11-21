<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import { authStore } from "@/stores/auth";

const store = authStore();

store.connectWallet();
</script>

<template>
  <div>
    <Navbar />
    <RouterView />
  </div>
</template>
