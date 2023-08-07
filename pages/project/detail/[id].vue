<script setup lang="ts">
interface projectType {
  content: string;
  end_date?: string;
  start_date: string;
  name: string;
  id: number;
  url?: string;
}

import { createClient } from '@supabase/supabase-js';
const route = useRoute();
const config = useRuntimeConfig();

const projectData = ref<projectType[]>([]);

const supabase = createClient<projectType>(
  config.public.SUPABASE_URL,
  config.public.SUPABASE_KEY
);

const getData = async () => {
  const { data, error } = await supabase
    .from('projectDetail')
    .select()
    .eq('id', route.params.id);

  if (error) {
    throw createError({ statusMessage: error.message });
  }

  projectData.value = data;
  console.log(data, error);
};

onMounted(() => {
  getData();
});
</script>

<template>
  <div class="common-layout p-10 h-screen">
    <el-container class="h-full">
      <el-header class="flex justify-center">
        <span class="text-2xl font-bold">{{ projectData[0]?.name }}</span>
      </el-header>
      <el-main class="m-auto">
        <ul class="list-disc">
          <li>
            기간 : {{ projectData[0]?.start_date }} ~
            {{ projectData[0]?.end_date || '진행중' }}
          </li>
          <li v-if="projectData[0].url">
            URL : <el-link :href="projectData[0].url">이동</el-link>
          </li>
          <li v-html="projectData[0]?.content" />
        </ul>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped></style>
