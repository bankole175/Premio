<template>
  <main>
    <h1>Favorite Foods</h1>
    <draggable v-model="meals" tag="ul">
      <template #item="{ element: meal }">
        <li>{{ meal }}</li>
      </template>
    </draggable>
  </main>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { ref } from 'vue'

const meals = ref([
  'Hamburger',
  'Pizza',
  'Spaghetti',
  'Tacos',
  'Teriyaki Chicken'
])
</script>
