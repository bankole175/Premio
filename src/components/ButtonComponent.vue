<template>
  <button
    type="button"
    :class="{
      'btn-primary': variant === 'regular',
      'btn-outline-primary': variant === 'outline',
      'btn-white': variant === 'white',
      'btn-secondary': variant === 'secondary',
      'px-7 py-4 h-[60px] text-base': size === 'large',
      'px-[21.67px] py-[15.64px] h-[48px] text-sm': size === 'regular',
      'px-[14px] py-2 h-[36px] text-sm': size === 'small'
    }"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'

type buttonVariant = 'regular' | 'outline' | 'white' | 'link' | 'secondary'
type buttonSize = 'regular' | 'large' | 'small'

interface ButtonProps extends ButtonHTMLAttributes {
  size: buttonSize
  variant: buttonVariant
  isLoading?: boolean | undefined
}

defineProps<ButtonProps>()
</script>

<style scoped></style>
