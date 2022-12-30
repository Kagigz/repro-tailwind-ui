<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps({
  current: {
    type: String,
    required: true,
  },
  projects: {
    type: Object,
    required: true,
  },
  mainNavigation: {
    type: Object,
    required: true,
  },
  bottomNavigation: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['changeProject'])

const isCurrent = (item: any) => {
  return item.id === props.current
}

watch(
  () => props,
  () => {},
  {
    immediate: true,
    deep: false,
  },
)
</script>

<template>
  <div class="flex flex-shrink-0 items-center space-y-5 px-4">
    <img class="h-12 w-auto" src="/imgs/logo_text_dark.svg" alt="Firesol">
  </div>
  <div class="flex items-center px-4 mt-10">
    <div class="mr-2 text-sm text-white">
      Project
    </div>
    <div class="w-100%">
      <a-select
        v-model:value="projects.selected"
        :options="projects.list"
        class="w-100% text-redorange-300"
        :bordered="false"
        @change="emit('changeProject')"
      >
        <template #suffixIcon>
          <div i-ph-caret-down class="text-white mt-(-0.5)" />
        </template>
      </a-select>
    </div>
  </div>
  <div class="mt-8 flex flex-grow place-items-stretch flex-col bg-secondary">
    <nav class="flex-1 space-y-1" aria-label="Main Sidebar">
      <RouterLink
        v-for="item in mainNavigation" :key="item.id" :to="item.href"
        class="group flex items-center px-3 py-2 text-sm font-medium border-l-4"
        :class="[isCurrent(item) ? 'bg-redorange-100 border-primary text-redorange-700  hover:text-redorange-800' : 'border-transparent text-white hover:bg-navyblue-600 hover:text-slate-200']"
      >
        <Icon
          :icon="`ph:${item.icon}`"
          class="mr-3 flex-shrink-0 h-6 w-6" :class="[item.id === props.current ? 'text-redorange-600' : 'text-white group-hover:text-slate-100']" aria-hidden="true"
        />
        {{ item.name }}
      </RouterLink>
    </nav>
    <nav class="space-y-1" aria-label="Bottom Sidebar">
      <RouterLink
        v-for="item in bottomNavigation" :key="item.id" :to="item.href"
        class="group flex items-center px-3 py-2 text-sm font-medium border-l-4"
        :class="[isCurrent(item) ? 'bg-redorange-100 border-primary text-redorange-700  hover:text-redorange-800' : 'border-transparent text-white hover:bg-navyblue-600 hover:text-slate-200']"
      >
        <Icon
          :icon="`ph:${item.icon}`"
          class="mr-3 flex-shrink-0 h-6 w-6" :class="[item.id === props.current ? 'text-redorange-600' : 'text-white group-hover:text-slate-100']" aria-hidden="true"
        />
        {{ item.name }}
      </RouterLink>
    </nav>
  </div>
</template>
