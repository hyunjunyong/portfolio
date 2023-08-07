<script lang="ts" setup>
const router = useRouter();
</script>

<template>
  <div class="pt-10 px-10">
    <el-header class="flex justify-between">
      <el-link type="success" @click="router.push('/')"
        ><span class="text-2xl font-bold">Hyun's Portfolio</span></el-link
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
      </ul>
    </el-header>
    <el-divider />
    <slot />
  </div>
</template>

<style scoped></style>
