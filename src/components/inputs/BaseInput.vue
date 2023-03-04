<template>
  <div class="form-group">
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    <input
      :type="type ? type : 'text'"
      :value="title"
      :placeholder="placeholder ? placeholder : ''"
      class="form-control"
      :disabled="disabled"
      @input="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'
import { onMounted } from 'vue'

interface InputProps extends InputHTMLAttributes {
  label?: string
  title: any
  type?: string
  placeholder?: string
  disabled?: boolean
  id: string
}

defineProps<InputProps>()

const emit = defineEmits(['update:title'])

const handleChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value
  emit('update:title', value)
}

onMounted(() => {})
</script>

<style scoped></style>
