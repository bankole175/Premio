<template>
  <div v-if="createWidgetForm && isVisible" class="widget-popup-preview">
    <div class="flex items-center">
      <div class="flex">
        <div
          :style="{
            width: `${createWidgetForm.width}px`,
            height: `${createWidgetForm.height}px`,
            backgroundColor: `${createWidgetForm.widgetBackground}`
          }"
          class="rounded-[50%] flex justify-center items-center shadow-lgCustom widget-popup"
        >
          <div
            :style="{
              width: `${createWidgetForm.width - 20}px`,
              height: `${createWidgetForm.height - 20}px`
            }"
            class="flex justify-center items-center border-white border-[2px] rounded-[50%] p-20"
          >
            <div class="w-full">
              <div
                v-for="(element, index) in createWidgetForm.elementList"
                :key="index"
              >
                <StarComponent
                  :color="element.value"
                  v-if="element.type === 'star'"
                  :style="{
                    top: `${element.y}px`,
                    left: `${element.x}px`
                  }"
                />
                <p
                  v-if="element.type === 'title'"
                  :style="{
                    top: `${element.y}px`,
                    left: `${element.x}px`
                  }"
                  class="text-white font-semibold text-[24px]"
                >
                  {{ element.value }}
                </p>
                <base-input
                  v-if="element.type === 'email' || element.type === 'input'"
                  :style="{
                    top: `${element.y}px`,
                    left: `${element.x}px`
                  }"
                  id="email"
                  :title="null"
                  :placeholder="element.value"
                  class="w-full"
                />
                <button
                  :style="{
                    backgroundColor: `${element.color}`,
                    width: `${element.width}px`,
                    top: `${element.y}px`,
                    left: `${element.x}px`
                  }"
                  v-if="element.type === 'button'"
                  class="pop-btn text-[24px] font-semibold text-white bg-black h-[65px] w-full rounded-[10px]"
                >
                  {{ element.value }}
                </button>
                <p
                  :style="{
                    top: `${element.y}px`,
                    left: `${element.x}px`
                  }"
                  v-if="element.type === 'label'"
                  class="text-white font-semibold text-[15px]"
                >
                  {{ element.value }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          :style="{ backgroundColor: createWidgetForm.widgetBackground }"
          class="cursor-pointer rounded-[50%] h-6 w-6 flex items-center justify-center"
          type="button"
          @click="closePreview"
        >
          <XMarkIcon class="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
import type { ICreateWidget } from '@/utils/types'
import StarComponent from '@/components/inputs/StarComponent.vue'

defineProps<{
  createWidgetForm: ICreateWidget
  isVisible: boolean
}>()
const emit = defineEmits(['closePreview'])

const closePreview = () => {
  emit('closePreview')
}
</script>

<style scoped></style>
