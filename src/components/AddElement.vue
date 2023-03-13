<template>
  <div class="mt-5">
    <Menu>
      <MenuButton>
        <p-button size="small" variant="outline"
          ><PlusIcon class="w-5 h-[15px]" /> Add field</p-button
        >
      </MenuButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="right-[-10px] ml-[-10px] mt-2 mb-3 z-40 w-[9rem] divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <div v-for="field in fieldTypes" :key="field.type">
              <MenuItem v-slot="{ active }">
                <button
                  @click="sendElementToParent(field)"
                  :class="[
                    active ? 'bg-primary text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm'
                  ]"
                >
                  {{ field.label }}
                </button>
              </MenuItem>
            </div>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import type { IElement } from '@/utils/types'
import { PlusIcon } from '@heroicons/vue/24/outline'

const emit = defineEmits(['setElement'])

const fieldTypes = [
  { label: 'Title', type: 'title', inputType: 'text', value: '' },
  { label: 'Label', type: 'label', inputType: 'text', value: '' },
  {
    label: 'Email',
    type: 'email',
    inputType: 'text',
    value: 'Email'
  },
  {
    label: 'Text input',
    type: 'input',
    inputType: 'text',
    value: 'Text input'
  },
  {
    label: 'Star',
    type: 'star',
    value: '#f56e73',
    inputType: 'color'
  },
  {
    label: 'Button',
    type: 'button',
    value: 'Sign up now',
    color: '#000000',
    width: 200
  }
]

const sendElementToParent = (element: IElement) => {
  const newElement = {
    label: element.label,
    type: element.type,
    inputType: element.inputType,
    value:
      element.type === 'email'
        ? 'Email'
        : element.type === 'input'
        ? 'Text input'
        : element.type === 'button'
        ? 'Button'
        : element.type === 'star'
        ? '#f56e73'
        : 'Enter value',
    color: '#f56e73'
  }
  emit('setElement', newElement)
}
</script>

<style scoped></style>
