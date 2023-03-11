<template>
  <div class="flex gap-x-4">
    <StarIcon class="w-5 h-5" :style="{ fill: color, stroke: 'none' }" />
    <StarIcon class="w-7 h-7" :style="{ fill: color, stroke: 'none' }" />
    <StarIcon class="w-5 h-5" :style="{ fill: color, stroke: 'none' }" />
  </div>
</template>

<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/24/outline'

defineProps<{ color: string }>()
</script>

<style scoped></style>
