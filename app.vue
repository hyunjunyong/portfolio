<script setup lang="ts">
interface countryType {
  id: number;
  name: string;
}

import { createClient } from '@supabase/supabase-js';

const config = useRuntimeConfig();
const supabase = createClient<countryType[]>(
  config.public.SUPABASE_URL,
  config.public.SUPABASE_KEY
);

const countries = ref<countryType[]>([]);

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
