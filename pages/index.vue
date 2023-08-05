<script lang="ts" setup>
const tableData = [
  {
    profile: '1998.01.21',
    contact: 'Email',
    contactHref: 'hjy123432@gmail.com',
  },
  {
    profile: '커넥트 웨이브 재직중(2022-02 ~)',
    contact: 'Phone',
    contactHref: '010-7714-4649',
  },
  {
    profile: '제주대학교 졸업(2022.08)',
    contact: 'Github',
    contactHref: 'https://github.com/hyunjunyong',
  },
  {
    profile: '1998.01.21',
    contact: 'Blog',
    contactHref: 'https://hjycoinfe.tistory.com/',
  },
];

const projectList = [
  {
    title: '날방',
    imageUrl: '/nalbang.png',
    openModal: false,
    content:
      '시청자 앱은 Vue3를 웹앱으로 만들었고, 백오피스는 Nuxt2로 구성되어있습니다.',
  },
  {
    title: '일단떠나',
    imageUrl: '/justgo.png',
    openModal: false,
    content:
      'Vue2를 사용하여 리뉴얼 제작되었으며, Jquery와 Vue가 혼용되어 있는 것을 Vue로 마이그레이션했습니다.',
  },
  {
    title: '큐픽',
    imageUrl: '/qpick.png',
    openModal: false,
    content:
      'Html/Css로 기본 퍼블리싱 작업을 진행하였습니다. Jquery로 배너기능을 추가하였습니다.',
  },
  {
    title: '잇톡',
    imageUrl: '/ittok.png',
    openModal: false,
    content: 'Nuxt3를 사용해 백오피스를 구성하였습니다.',
  },
];

const openModal = ref<boolean[]>([false, false, false, false]);
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};

const Skill = [
  { name: 'Nuxt3', percentage: 70, color: '#34d399' },
  { name: 'Nuxt2', percentage: 60, color: '#38bdf8' },
  { name: 'Vue2,3', percentage: 70, color: '#a78bfa' },
  { name: 'JavaScript', percentage: 80, color: '#fbbf24' },
  { name: 'TypeScript', percentage: 50, color: '#fb7185' },
];

const duration = (percentage: number) => Math.floor(percentage / 5);

// const progressColor = (percentage: number) => {
//   if (percentage >= 80) return '#a7f3d0';
//   if (percentage >= 60) return '#7dd3fc';
//   if (percentage >= 40) return '#d8b4fe';
//   if (percentage >= 20) return '#fcd34d';
//   if (percentage < 20) return '#fda4af';
// };
</script>

<template>
  <div class="common-layout p-10 h-screen">
    <el-container class="h-full">
      <el-header class="flex justify-center border-b-4">
        <span class="text-2xl font-bold">Hyun's Portfolio</span>
        <!-- 해당부분은 차후 블로그등을 만들떄 사용할 예정 -->
        <!-- <ul>
          <li></li>
        </ul> -->
      </el-header>
      <el-container class="mt-10">
        <el-main>
          <ul class="flex gap-5 justify-center items-center">
            <li class="w-40 h-40">
              <img src="/img/myimage.jpg" alt="" class="w-full h-full" />
            </li>
            <li>
              안녕하세요 프론트엔드 개발자 현준용입니다! 혼자하는것보단
              여러사람과 협업하여 커뮤니케이션을 하는 것을 즐기고 어려운 문제에
              직면해도 해결하기 위해 끊임없이 도전하는 것을 지향합니다.
            </li>
          </ul>
          <el-table :data="tableData" stripe style="width: 100%" class="m-auto">
            <el-table-column prop="profile" label="프로필" width="300" />
            <el-table-column prop="contact" label="contact" width="600">
              <template #default="scope">
                <el-link :href="tableData[scope.$index].contactHref">
                  {{ tableData[scope.$index].contactHref }} :
                  {{ tableData[scope.$index].contactHref }}
                </el-link>
              </template>
            </el-table-column>
          </el-table>
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
                  :before-close="handleClose"
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
                      <el-button
                        type="primary"
                        @click="openModal[index] = false"
                      >
                        자세히 보기
                      </el-button>
                    </span>
                  </template>
                </el-dialog>
              </ClientOnly>
            </li>
          </ul>
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
    </el-container>
  </div>
</template>
<style scoped></style>
