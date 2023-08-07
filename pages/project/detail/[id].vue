<script setup lang="ts">
interface projectType {
  content: string;
  end_date?: string;
  start_date: string;
  name: string;
  id: number;
}

import { createClient } from '@supabase/supabase-js';
const route = useRoute();
const config = useRuntimeConfig();

const projectData = ref<projectType[]>([]);

const supabase = createClient(
  config.public.SUPABASE_URL,
  config.public.SUPABASE_KEY
);

const getData = async () => {
  const { data, error } = await supabase
    .from('projectDetail')
    .select()
    .eq('id', route.params.id);
  projectData.value = data;
  console.log(data, error);
};

onMounted(() => {
  getData();
});
</script>

<template>
  <div>
    <div v-html="projectData[0]?.content"></div>
  </div>
</template>

<style scoped></style>
