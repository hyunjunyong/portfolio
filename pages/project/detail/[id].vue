<script setup lang="ts">
import { ElLoading } from 'element-plus';

const route = useRoute();

const projectData = ref<Database['public']['Tables']['projectDetail']['Row']>();

const getData = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  });
  const data = await $fetch('/api/projectList', {
    query: { id: route.params.id },
  });
  projectData.value = data;
  setTimeout(() => {
    loading.close();
  }, 1000);
  console.log(data);
};
onMounted(() => {
  getData();
});
</script>

<template>
  <div class="common-layout p-10 h-screen">
    <el-container class="h-full">
      <el-header class="flex justify-center">
        <span class="text-2xl font-bold">{{ projectData?.name }}</span>
      </el-header>
      <el-main class="m-auto">
        <ul class="list-disc">
          <li>
            기간 : {{ projectData?.start_date }} ~
            {{ projectData?.end_date || '진행중' }}
          </li>
          <li v-if="projectData?.url" class="flex items-center">
            <span>URL :</span>
            <el-link type="success" :href="projectData?.url">이동</el-link>
          </li>
          <li v-html="projectData?.content" />
        </ul>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
@layer components {
  .el-link {
    @apply ml-1 text-lime-500;
  }
}
</style>
