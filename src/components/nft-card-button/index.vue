<template>
  <div class="w-full flex">
    <p v-if="label" class="text-lg">{{ label }}</p>
    <button class="btn btn-sm btn-primary" @click="fn">{{ buttonText }}</button>
  </div>
</template>
<script setup lang="ts">
defineProps<{ fn: () => void; label?: string; buttonText: string }>();
</script>
