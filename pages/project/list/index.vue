<script setup lang="ts">
useHead({
  title: 'Front-end protfolio',
  meta: [
    {
      name: '프론트엔드 프로젝트 리스트',
      content: '프론트엔드 프로젝트 리스트',
    },
  ],
});

const projectList = [
  { title: '일단떠나', link: '/project/detail/1' },
  { title: '날방', link: '/project/detail/2' },
  { title: '잇톡', link: '/project/detail/4' },
  { title: '큐픽', link: '/project/detail/3' },
];
</script>

<template>
  <div>
    <el-container class="h-full">
      <el-header class="flex justify-center">
        <span class="text-2xl font-bold">ProjectList</span>
      </el-header>
      <p>현재 단장중 ....</p>
      <el-divider />
      <el-main>
        <ul>
          <li
            v-for="(item, index) in projectList"
            :key="index"
            class="w-1/2 m-auto h-[100px]"
          >
            <el-card
              class="box-card mt-5 h-full cursor-pointer"
              @click="() => navigateTo(item.link)"
            >
              {{ item.title }}
            </el-card>
          </li>
        </ul>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped></style>
