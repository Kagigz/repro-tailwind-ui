<script setup lang="ts">
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'

const userNavigation = [
  {
    name: 'View Profile',
    href: '/profile',
  },
  {
    name: 'Manage account',
    href: '/profile/account',
  },
  {
    name: 'Log out',
    href: '/logout',
  },
]
</script>

<template>
  <!-- Profile dropdown -->
  <!-- <Menu as="div" class="relative ml-3">
    <div>
      <MenuButton class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <span class="sr-only">Open user menu</span>
        <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      </MenuButton>
    </div>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
          <RouterLink :to="item.href" class="block px-4 py-2 text-sm text-gray-700" :class="[active ? 'bg-gray-100' : '']">
            {{ item.name }}
          </RouterLink>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu> -->

  <Menu as="div" class="relative ml-5 flex-shrink-0">
    <div>
      <MenuButton class="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-redorange-500 focus:ring-offset-2">
        <span class="sr-only">Open user menu</span>
        <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      </MenuButton>
    </div>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }" :disabled="false">
          <a :href="item.href" class="block py-2 px-4 text-sm text-gray-700" :class="[active ? 'bg-gray-100' : '']">{{ item.name }}</a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

