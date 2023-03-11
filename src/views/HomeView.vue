<template>
  <main>
    <div class="grid grid-cols-12">
      <div class="col-span-6 max-h-[95vh] pl-1 pr-6 overflow-y-scroll">
        <base-input
          id="name"
          v-model:title="createWidgetForm.name"
          label="Name"
          class="w-full"
        />
        <base-input
          id="widgetBackground"
          v-model:title="createWidgetForm.widgetBackground"
          type="color"
          label="Widget Background"
          class="w-full"
        />
        <div class="grid grid-cols-2 gap-x-6">
          <base-input
            id="width"
            v-model:title="createWidgetForm.width"
            label="Width"
            class="w-full"
          />
          <base-input
            id="height"
            v-model:title="createWidgetForm.height"
            label="Height"
            class="w-full"
          />
        </div>

        <draggable
          tag="ul"
          :list="createWidgetForm.elementList"
          class="list-group"
          handle=".handle"
          item-key="name"
        >
          <template #item="{ element, index }">
            <li>
              <div
                class="flex gap-x-5 justify-between items-center rounded-lg shadow-lgCustom bg-white h-20 pt-6 px-2 mb-6"
                v-if="element.type !== 'button'"
              >
                <img
                  src="@/assets/icons/drag.svg"
                  alt=""
                  class="mb-6 handle cursor-grab"
                />
                <base-input
                  id="user"
                  v-model:title="element.value"
                  class="w-full col-span-11"
                  :type="element.inputType"
                  v-model="createWidgetForm.elementList[index].value"
                />
                <TrashIcon
                  class="w-6 h-6 mb-6 cursor-pointer text-red-400"
                  type="button"
                  @click="removeElement(index)"
                />
              </div>
              <div
                class="grid grid-cols-12 gap-x-5 rounded-lg items-center justify-between bg-white shadow-lgCustom h-20 pt-6 mb-6 px-2"
                v-if="element.type === 'button'"
              >
                <img
                  src="@/assets/icons/drag.svg"
                  alt=""
                  class="mb-6 handle cursor-pointer"
                />

                <base-input
                  id="user"
                  v-model:title="element.value"
                  class="w-full col-span-4 ml-[-25px]"
                  v-model="createWidgetForm.elementList[index].value"
                />
                <base-input
                  id="buttonLabel"
                  v-model:title="element.width"
                  class="w-full col-span-4"
                  type="number"
                  v-model="createWidgetForm.elementList[index].value"
                />
                <base-input
                  id="buttonColor"
                  v-model:title="element.color"
                  class="w-full col-span-2"
                  type="color"
                  v-model="createWidgetForm.elementList[index].value"
                />
                <TrashIcon
                  class="w-6 h-6 mb-6 cursor-pointer text-red-400 w-full col-span-1 inline-block"
                  type="button"
                  @click="removeElement(index)"
                />
              </div>
            </li>
          </template>
        </draggable>

        <div class="flex justify-between items-center">
          <AddElement @set-element="setElement($event)" />
          <div class="flex gap-x-4">
            <p-button
              size="small"
              variant="outline"
              type="button"
              @click="isPreview = true"
              >Preview</p-button
            >
            <p-button size="small" variant="regular" @click="save" type="button"
              >Save</p-button
            >
          </div>
        </div>
      </div>

      <div
        class="col-span-6 h-[95vh] max-h-[95vh] flex items-center justify-center border-l"
      >
        <PreviewWidget :createWidgetForm="createWidgetForm" :isVisible="true" />
      </div>
    </div>

    <WidgetComponent
      :isVisible="isPreview"
      :createWidgetForm="createWidgetForm"
      @close-preview="isPreview = false"
    />
  </main>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { reactive, ref } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import type { ICreateWidget, IElement } from '@/utils/types'
import AddElement from '@/components/AddElement.vue'
import PreviewWidget from '@/components/PreviewWidget.vue'
import WidgetComponent from '@/components/WidgetComponent.vue'

const createWidgetForm = reactive<ICreateWidget>({
  name: '',
  width: 500,
  height: 500,
  widgetBackground: '#dfa3a5',
  elementList: [
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
})

const isPreview = ref<boolean>(false)
const setElement = (elementType: IElement) => {
  let newElement
  if (elementType.type !== 'label' && elementType.type !== 'title') {
    createWidgetForm.elementList.push(elementType)
    return
  }
  newElement = { label: elementType.label, type: elementType.type, value: '' }
  createWidgetForm.elementList.push(newElement)
}

const removeElement = (index: number) => {
  createWidgetForm.elementList.splice(index, 1)
}

const save = () => {
  localStorage.setItem('createPremioDTO', JSON.stringify(createWidgetForm))
}
</script>

<style></style>
