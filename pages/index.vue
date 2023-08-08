<script lang="ts" setup>
const router = useRouter();
const contactInfo = ref<Database['public']['Tables']['contact_info']['Row'][]>(
  []
);
const projectList = ref<Database['public']['Tables']['projectlist']['Row'][]>(
  []
);
const Skill = ref<Database['public']['Tables']['skillInfo']['Row'][]>([]);

const getContactInfo = async () => {
  const data = await $fetch('/api/contactInfo');
  contactInfo.value = data;
  console.log(data);
};
const getProjectList = async () => {
  const data = await $fetch('/api/projectDetail');
  projectList.value = data;
  console.log(data);
};
const getSkillInfo = async () => {
  const data = await $fetch('/api/skillInfo');
  Skill.value = data;
  console.log(data);
};

const openModal = ref<boolean[]>([false, false, false, false]);

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
  getSkillInfo();
});
</script>

<template>
  <div class="common-layout pb-10">
    <el-container class="h-full">
      <el-main>
        <ul class="flex gap-5 justify-center items-center">
          <li>프론트엔드 개발자 현준용 입니다!</li>
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
        <el-carousel class="mt-10" :autoplay="false" type="card" height="400px">
          <el-carousel-item v-for="(item, index) in projectList" :key="index">
            <el-card @click="openModal[index] = true" class="cursor-pointer">
              <template #header>
                {{ item.title }}
              </template>
              <template #default>
                <el-image
                  :src="`img${item.imageUrl}`"
                  fit="fill"
                  class="w-full h-[300px]"
                />
              </template>
            </el-card>
            <ClientOnly>
              <el-dialog
                :lock-scroll="false"
                v-model="openModal[index]"
                :title="item.title"
                width="50%"
              >
                <span class="mt-5">{{ item.content }}</span>
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
          </el-carousel-item>
        </el-carousel>
        <el-divider />
        <div class="mt-10">
          <div class="flex items-center justify-center gap-5">
            <h3
              class="text-center underline underline-offset-1 font-bold text-4xl text-cyan-500"
            >
              Skill
            </h3>
            <img src="/img/vue.gif" alt="" class="w-[250px] h-[200px]" />
          </div>
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
