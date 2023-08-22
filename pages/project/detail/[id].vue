<script setup lang="ts">
import { ElLoading } from 'element-plus';
useHead({
  title: 'protfolio project',
  meta: [
    {
      name: '프론트엔드 포트폴리오 프로젝트',
      content: '프론트엔드 포트폴리오 프로젝트',
    },
  ],
});
const route = useRoute();

const projectData = ref<Database['public']['Tables']['projectDetail']['Row']>();

const getProjectDetail = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  });
  try {
    const { data } = await useFetch<
      Database['public']['Tables']['projectDetail']['Row']
    >('/api/projectDetail', {
      query: { id: route.params.id },
    });
    if (data.value) {
      projectData.value = data.value;
    }
    console.log(data.value);
    console.log(projectData.value?.Responsibilities);
  } finally {
    loading.close();
  }
};

const splitData = (data?: string) => {
  console.log(data);
  if (data) return data.split(',');
};
onMounted(() => {
  getProjectDetail();
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
          <LayoutSubTitle>
            <template #title>기간</template>
            <template #content
              ><p>
                {{ projectData?.start_date }} ~
                {{ projectData?.end_date || '진행중' }}
              </p></template
            >
          </LayoutSubTitle>
          <LayoutSubTitle v-if="projectData?.url">
            <template #title>URL</template>
            <template #content
              ><p>
                <el-link type="success" :href="projectData?.url"
                  ><span class="text-base">이동</span></el-link
                >
              </p></template
            >
          </LayoutSubTitle>
          <LayoutSubTitle>
            <template #title>담당 업무</template>
            <template #content>
              <p>
                <ul class="list-disc list-inside pl-1">
                <li v-for="item in splitData(projectData?.Responsibilities)">
                  {{ item }}
                </li>
              </ul>
              </p>
            </template>
          </LayoutSubTitle>
          <LayoutSubTitle v-if="projectData?.result">
            <template #title>성과</template>
            <template #content>
              <p>{{ projectData?.result }}</p></template
            >
          </LayoutSubTitle>
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
