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

        <div
          v-for="(element, index) in createWidgetForm.elementList"
          :key="index"
        >
          <div
            v-if="element.type !== 'button' && element.type !== 'star'"
            class="flex gap-x-5 justify-between items-center"
          >
            <base-input
              id="user"
              v-model:title="element.value"
              :disabled="element.type !== 'title' && element.type !== 'label'"
              class="w-full col-span-11"
              v-model="createWidgetForm.elementList[index].value"
            />
            <TrashIcon
              class="w-6 h-6 mb-6 cursor-pointer text-red-400"
              type="button"
              @click="removeElement(index)"
            />
          </div>
        </div>

        <AddElement @set-element="setElement($event)" />
      </div>

      <div
        class="col-span-6 h-[95vh] max-h-[95vh] flex items-center justify-center border-l"
      >
        <div
          class="w-[500px] h-[500px] rounded-[50%] bg-[#dfa3a5] flex justify-center items-center shadow-lgCustom"
        >
          <div
            class="flex justify-center items-center w-[480px] h-[480px] border-white border-[2px] rounded-[50%] p-20"
          >
            <div class="w-full">
              <draggable
                tag="ul"
                :list="createWidgetForm.elementList"
                class="list-group"
                handle=".handle"
                item-key="name"
              >
                <template #item="{ element }">
                  <li class="list-group-item">
                    <div
                      v-if="element.type === 'star'"
                      class="flex justify-center mb-6"
                    >
                      <StarComponent class="handle" />
                    </div>
                    <p
                      v-if="element.type === 'title'"
                      class="text-white font-semibold text-[24px] text-center handle mb-6"
                    >
                      {{ element.value }}
                    </p>
                    <base-input
                      v-if="
                        element.type === 'email' || element.type === 'input'
                      "
                      id="email"
                      :title="null"
                      :placeholder="
                        element.type === 'email'
                          ? 'johndoe@gmail.com'
                          : 'Enter value'
                      "
                      class="w-full handle"
                    />
                    <button
                      v-if="element.type === 'button'"
                      class="pop-btn text-[24px] font-semibold text-white bg-black h-[65px] w-full rounded-[10px] mb-6 handle"
                    >
                      Sign up now
                    </button>
                    <p
                      v-if="element.type === 'label'"
                      class="text-white font-semibold text-[15px] text-center handle mb-6"
                    >
                      {{ element.value }}
                    </p>
                  </li>
                </template>
              </draggable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { reactive } from 'vue'
import BaseInput from '@/components/inputs/BaseInput.vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import type { ICreateWidget, IElement } from '@/utils/types'
import StarComponent from '@/components/inputs/StarComponent.vue'
import AddElement from '@/components/AddElement.vue'

const createWidgetForm = reactive<ICreateWidget>({
  name: '',
  width: 500,
  height: 500,
  elementList: [
    { label: 'Star', type: 'star', value: '' },
    { label: 'Button', type: 'button', value: '' }
  ]
})

const setElement = (elementType: IElement) => {
  createWidgetForm.elementList.push(elementType)
}

const removeElement = (index: number) => {
  createWidgetForm.elementList.splice(index, 1)
}
</script>
