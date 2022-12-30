<template>
  <div class="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
    <button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden" @click="sidebarOpen = true">
      <span class="sr-only">Open sidebar</span>
      <div i-ph-list class="h-6 w-6" aria-hidden="true" />
    </button>
    <div class="flex flex-1 justify-between px-4">
      <div class="flex flex-1">
        <HeaderSearch />
      </div>
      <div class="ml-4 flex items-center md:ml-6">
        <HeaderNotifications />
        <!-- Profile dropdown -->
        <HeaderMenu />
      </div>
    </div>
  </div>
</template>

