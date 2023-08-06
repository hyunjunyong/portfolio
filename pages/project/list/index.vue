<script setup lang="ts">
const router = useRouter();

const projectList = [
  { title: '일단떠나', link: '/project/justgo' },
  { title: '날방', link: '/project/nalbang' },
  { title: '잇톡', link: '/project/ittok' },
  { title: '큐픽', link: '/project/qpick' },
];
</script>

<template>
  <div>
    <el-container class="h-full">
      <el-header class="flex justify-center">
        <span class="text-2xl font-bold">ProjectList</span>
      </el-header>
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
              @click="() => router.push(item.link)"
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
