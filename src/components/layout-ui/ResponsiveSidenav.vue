<script setup lang="ts">
const props = defineProps({
  current: {
    type: String,
    required: true,
  },
})

const sidebarOpen = ref(true)

const projects = reactive({
  selected: 'default',
  list: [
    {
      value: 'default',
      label: 'Default',
    },
    {
      value: 'projectX',
      label: 'Project X',
    },
    {
      value: 'projectY',
      label: 'Project Y',
    },
    {
      value: 'projectZ',
      label: 'Project Z',
    }],
})

const mainNavigation = [
  { id: 'index', name: 'Dashboard', icon: 'house-line-duotone', href: '/' },
  { id: 'auth', name: 'Authentication', icon: 'users-duotone', href: '/auth' },
  { id: 'firestore', name: 'Firestore', icon: 'database-duotone', href: '/firestore' },
  { id: 'storage', name: 'Storage', icon: 'archive-duotone', href: '/storage' },
]

const bottomNavigation = [
  { id: 'settings', name: 'Settings', icon: 'gear-duotone', href: '/settings' },
  { id: 'help', name: 'Help', icon: 'question-duotone', href: '/help' },
]

const changeProject = () => {

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
  <!-- Mobile sidebar as overlay -->
  <MobileSidenav :current="props.current" :projects="projects" :main-navigation="mainNavigation" :bottom-navigation="bottomNavigation" :open="sidebarOpen" @change-project="changeProject" @close="sidebarOpen = false" />

  <!-- Static sidebar for desktop -->
  <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
    <div class="flex flex-grow flex-col overflow-y-auto border-r border-slate-200 bg-secondary pt-5 pb-4 h-100vh">
      <SidenavComponent :current="props.current" :projects="projects" :main-navigation="mainNavigation" :bottom-navigation="bottomNavigation" @change-project="changeProject" />
    </div>
  </div>
</template>
