<script lang="ts" setup>
const router = useRouter();
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <!-- <div class="pt-10 px-10 bg-gray-200"> -->
  <div class="p-10 xs:p-5">
    <el-header class="flex justify-between">
      <el-link type="success" @click="router.push('/')"
        ><span class="text-2xl font-bold xs:text-xl xs:font-semibold"
          >Hyun's Portfolio</span
        ></el-link
      >

      <ul class="flex gap-3 items-center justify-center">
        <li>
          <el-link type="success" @click="router.push('/')" class="text-xl"
            >Home</el-link
          >
        </li>

        <li>
          <el-link
            type="success"
            @click="router.push('/project/list')"
            class="text-xl"
            >Project</el-link
          >
        </li>
        <li>
          <ClientOnly>
            <button @click="toggleDark()">
              <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
              <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
            </button>
          </ClientOnly>
        </li>
      </ul>
    </el-header>
    <el-divider />
    <slot />
  </div>
</template>

<style scoped></style>
