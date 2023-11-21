<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li></li>
          <li v-for="route in routes" :key="route.link">
            <RouterLink :to="route.link">{{ route.title }}</RouterLink>
          </li>
        </ul>
      </div>
      <RouterLink to="/" class="btn btn-ghost text-xl">AdessoOKR</RouterLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li v-for="route in routes" :key="route.link">
          <RouterLink :to="route.link">{{ route.title }}</RouterLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <a v-if="!store.auth" class="btn" @click="store.getWallet"
        >Connect Wallet</a
      >
      <p v-else class="text-xl">{{ store.auth }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
import { authStore } from "@/stores/auth";
interface Route {
  title: string;
  link: string;
}
const store = authStore();
const routes: Route[] = [
  { title: "Mint", link: "/mint" },
  { title: "Inventory", link: "/inventory" },
];
</script>
