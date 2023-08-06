<script setup lang="ts">
import { createClient } from '@supabase/supabase-js';

const config = useRuntimeConfig();
const supabase = createClient(
  config.public.SUPABASE_URL,
  config.public.SUPABASE_KEY
);
const countries = ref([]);

async function getCountries() {
  const { data } = await supabase.from('countries').select();
  countries.value = data;
  console.log(data);
}

onMounted(() => {
  getCountries();
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
