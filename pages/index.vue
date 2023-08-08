<script lang="ts" setup>
import { createClient } from '@supabase/supabase-js';

const config = useRuntimeConfig();
const supabase = createClient<Database>(
  config.public.SUPABASE_URL,
  config.public.SUPABASE_KEY
);

const contactInfo = ref<Database['public']['Tables']['contact_info']['Row'][]>(
  []
);
const projectList = ref<Database['public']['Tables']['projectlist']['Row'][]>(
  []
);

const getContactInfo = async () => {
  const { data, error } = await supabase.from('contact_info').select('*');
  if (error) {
    throw createError({ statusMessage: error.message });
  }
  contactInfo.value = data;
  console.log(data, error);
};
const getProjectList = async () => {
  const { data, error } = await supabase.from('projectlist').select('*');
  if (error) {
    throw createError({ statusMessage: error.message });
  }
  projectList.value = data;
  console.log(data, error);
};

const router = useRouter();

const openModal = ref<boolean[]>([false, false, false, false]);

const Skill = [
  { name: 'Nuxt3', percentage: 70, color: '#34d399' },
  { name: 'Nuxt2', percentage: 60, color: '#38bdf8' },
  { name: 'Vue2,3', percentage: 70, color: '#a78bfa' },
  { name: 'JavaScript', percentage: 80, color: '#fbbf24' },
  { name: 'TypeScript', percentage: 50, color: '#fb7185' },
];

const duration = (percentage: number) => Math.floor(percentage / 5);

const goDetail = (index: number) => {
  router.push(`/project/detail/${index}`);
};
// const progressColor = (percentage: number) => {
//   if (percentage >= 80) return '#a7f3d0';
//   if (percentage >= 60) return '#7dd3fc';
//   if (percentage >= 40) return '#d8b4fe';
//   if (percentage >= 20) return '#fcd34d';
//   if (percentage < 20) return '#fda4af';
// };

onMounted(() => {
  getContactInfo();
  getProjectList();
});
</script>

<template>
  <div class="common-layout pb-10">
    <el-container class="h-full">
      <el-main>
        <ul class="flex gap-5 justify-center items-center">
          <li>
            안녕하세요 프론트엔드 개발자 현준용입니다! 혼자하는것보단 여러사람과
            협업하여 커뮤니케이션을 하는 것을 즐기고 어려운 문제에 직면해도
            해결하기 위해 끊임없이 도전하는 것을 지향합니다.
          </li>
          <li class="w-40 h-40">
            <img src="/img/myimage.jpg" alt="" class="w-full h-full" />
          </li>
        </ul>
        <el-divider />
        <el-table :data="contactInfo" stripe style="width: 100%" class="m-auto">
          <el-table-column prop="profile" label="프로필" :min-width="30" />
          <el-table-column prop="contact" label="contact" :min-width="70">
            <template #default="scope">
              <el-link
                type="success"
                v-if="contactInfo[scope.$index].contact_link"
                :href="contactInfo[scope.$index].contact_link"
              >
                {{ contactInfo[scope.$index].contact }} :
                {{ contactInfo[scope.$index].contact_link }}
              </el-link>
              <p v-else>
                {{ contactInfo[scope.$index].contact }} :
                {{ contactInfo[scope.$index].contact_address }}
              </p>
            </template>
          </el-table-column>
        </el-table>
        <el-divider />
        <ul class="grid grid-cols-3 gap-10 mt-10">
          <li v-for="(item, index) in projectList" :key="index">
            <el-card @click="openModal[index] = true" class="cursor-pointer">
              <template #header>
                {{ item.title }}
              </template>
              <template #default>
                <el-image
                  :src="`img${item.imageUrl}`"
                  fit="fill"
                  class="w-[400px] h-[200px]"
                />
              </template>
            </el-card>
            <ClientOnly>
              <el-dialog
                v-model="openModal[index]"
                :title="item.title"
                width="40%"
              >
                <el-image
                  :src="`img${item.imageUrl}`"
                  fit="fill"
                  class="w-[400px] h-[200px]"
                />
                <span>{{ item.content }}</span>
                <template #footer>
                  <span class="dialog-footer">
                    <el-button @click="openModal[index] = false"
                      >취소</el-button
                    >
                    <el-button type="primary" @click="goDetail(item.id)">
                      자세히 보기
                    </el-button>
                  </span>
                </template>
              </el-dialog>
            </ClientOnly>
          </li>
        </ul>
        <el-divider />
        <div class="mt-10">
          <h3 class="text-center">Skill</h3>
          <ul>
            <li v-for="(item, index) in Skill" :key="item.name" class="mt-5">
              <el-progress
                class="max-w-[800px] m-auto"
                :percentage="item.percentage"
                :stroke-width="15"
                :color="item.color"
                striped
                striped-flow
                :duration="duration(item.percentage)"
                ><span>{{ item.name }}</span></el-progress
              >
            </li>
          </ul>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<style scoped></style>
