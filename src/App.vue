<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import { authStore } from "@/stores/auth";
import Loading from "./components/Loading.vue";

const store = authStore();

store.connectWallet();
</script>

<template>
  <div>
    <Navbar />
    <RouterView />
    <Loading />
  </div>
</template>
