<template>
  <div v-if="createWidgetForm">
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
              v-if="element.type === 'star'"
              v-drag
              :color="element.value"
              @v-drag-end="getPosition($event, element)"
            />
            <p
              v-drag
              @v-drag-end="getPosition($event, element)"
              v-if="element.type === 'title'"
              class="text-white font-semibold text-[24px]"
            >
              {{ element.value }}
            </p>
            <base-input
              v-drag
              @v-drag-end="getPosition($event, element)"
              v-if="element.type === 'email' || element.type === 'input'"
              id="email"
              :title="null"
              :placeholder="element.value"
              class="w-full"
            />
            <button
              :style="{
                backgroundColor: `${element.color}`,
                width: `${element.width}px`
              }"
              v-drag
              @v-drag-end="getPosition($event, element)"
              v-if="element.type === 'button'"
              class="pop-btn text-[24px] font-semibold text-white bg-black h-[65px] w-full rounded-[10px]"
            >
              {{ element.value }}
            </button>
            <p
              v-drag
              @v-drag-end="getPosition($event, element)"
              v-if="element.type === 'label'"
              class="text-white font-semibold text-[15px]"
            >
              {{ element.value }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICreateWidget, IElement } from '@/utils/types'
import StarComponent from '@/components/inputs/StarComponent.vue'

defineProps<{
  createWidgetForm: ICreateWidget
}>()

const getPosition = (event: Event, element: IElement) => {
  const targetValue = event.target as HTMLInputElement
  element.x = targetValue.offsetLeft
  element.y = targetValue.offsetTop
}
</script>

<style scoped></style>
