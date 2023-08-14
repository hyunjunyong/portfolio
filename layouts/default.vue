<script lang="ts" setup>
import { Sunny, Moon } from '@element-plus/icons-vue';

const store = useDarkStore();
const isDark = useDark();
watch(isDark, (newValue) => {
  console.log(newValue);
  store.isDark = newValue;
});
</script>

<template>
  <div class="p-10 xs:p-5">
    <el-header class="flex justify-between">
      <el-link type="success" @click="() => navigateTo('/')"
        ><span class="text-2xl font-bold xs:text-xl xs:font-semibold"
          >Hyun's Portfolio</span
        ></el-link
      >

      <ul class="flex gap-3 items-center justify-center">
        <li>
          <el-link type="success" @click="() => navigateTo('/')" class="text-xl"
            >Home</el-link
          >
        </li>

        <li>
          <el-link
            type="success"
            @click="() => navigateTo('/project/list')"
            class="text-xl"
            >Project</el-link
          >
        </li>
        <li>
          <el-switch
            v-model="isDark"
            class="ml-2"
            width="40"
            style="
              --el-switch-on-color: #333333;
              --el-switch-off-color: #bebebe;
            "
            :active-action-icon="Moon"
            :inactive-action-icon="Sunny"
          />
        </li>
      </ul>
    </el-header>
    <el-divider />
    <slot />
  </div>
</template>

<style scoped></style>
