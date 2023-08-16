<script lang="ts" setup>
import { Right } from '@element-plus/icons-vue';
useHead({
  title: 'Front-end protfolio',
  meta: [{ name: '프론트엔드 포트폴리오', content: '프론트엔드 포트폴리오' }],
});

const store = useDarkStore();

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
  const data = await $fetch('/api/projectList');
  projectList.value = data;
  console.log(data);
};
const getSkillInfo = async () => {
  const data = await $fetch('/api/skillInfo');
  Skill.value = data;
  console.log(data);
};

// const progressColor = (percentage: number) => {
//   if (percentage >= 80) return '#a7f3d0';
//   if (percentage >= 60) return '#7dd3fc';
//   if (percentage >= 40) return '#d8b4fe';
//   if (percentage >= 20) return '#fcd34d';
//   if (percentage < 20) return '#fda4af';
// };

const iconColorMode = computed(() => {
  return store.isDark ? 'white' : 'black';
});

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
          <li class="w-2/5">
            <el-card class="box-card"
              >프론트엔드 개발자 현준용 입니다! 새로운 기술을 찾는 것을 좋아하고
              항상 어떤 기술이 잘 어울리는지 고민합니다.</el-card
            >
          </li>
          <!-- <li class="w-40 h-40"> -->
          <!-- <li class="w-40">
            <el-image
              fill="contain"
              src="/img/myimage.jpg"
              alt=""
              class="w-full h-full"
            />
          </li> -->
        </ul>
        <el-divider />
        <ClientOnly>
          <el-table
            :data="contactInfo"
            border
            style="width: 100%"
            class="m-auto"
          >
            <el-table-column prop="profile" label="프로필" :min-width="30" />
            <el-table-column prop="contact" label="contact" :min-width="50">
              <template #default="scope">
                <span
                  v-if="contactInfo[scope.$index].contact_link"
                  class="inline-flex items-center gap-1 mr-1"
                  >{{ contactInfo[scope.$index].contact }}
                  <el-icon :color="iconColorMode" :size="16"><Right /></el-icon>
                </span>
                <el-link
                  type="success"
                  v-if="contactInfo[scope.$index].contact_link"
                  :href="contactInfo[scope.$index].contact_link"
                >
                  <Icon
                    v-if="contactInfo[scope.$index].contact === 'Github'"
                    name="uil:github"
                    :color="iconColorMode"
                    class="w-6 h-6"
                  />

                  <nuxt-img
                    class="w-6 h-6"
                    v-if="contactInfo[scope.$index].contact === 'Blog'"
                    src="/img/tistory.png"
                    alt="/img/tistory.png"
                    format="webp"
                  />
                </el-link>
                <p v-else>
                  {{ contactInfo[scope.$index].contact }} :
                  {{ contactInfo[scope.$index].contact_address }}
                </p>
              </template>
            </el-table-column>
          </el-table>
        </ClientOnly>
        <el-divider />
        <ProjectCompany :projectList="projectList" />
        <el-divider class="border-red-600" />
        <ProjectPersonal />
        <el-divider />
        <div class="mt-10">
          <div class="flex items-center justify-center gap-5">
            <h3
              class="text-center underline underline-offset-1 font-bold text-4xl text-cyan-500 xs:text-2xl xs:font-semibold"
            >
              Skill
            </h3>
            <nuxt-img
              src="/img/vue.gif"
              alt="/img/vue.gif"
              width="250"
              height="200"
            />
            <!-- <img
              src="/img/vue.gif"
              alt=""
              class="w-[250px] h-[200px] xs:w-[200px] xs:h-40"
            /> -->
          </div>
          <SkillProgress :Skill="Skill" />
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<style scoped></style>
