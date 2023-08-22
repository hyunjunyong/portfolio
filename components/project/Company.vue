<script setup lang="ts">
import type { CarouselProps } from 'element-plus/es/components/carousel/src/carousel';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
const props = defineProps<{
  projectList: Database['public']['Tables']['projectlist']['Row'][];
}>();

const goDetail = (index: number) => {
  navigateTo(`/project/detail/${index}`);
};

const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smaller('sm');
const responsiveCard = ref<CarouselProps['type']>(sm.value ? '' : 'card');

watch(sm, (newSm) => {
  sm.value ? (responsiveCard.value = '') : (responsiveCard.value = 'card');
});
</script>

<template>
  <div>
    <p class="text-center text-2xl xs:text-xl font-bold xs:font-semibold">
      회사 프로젝트
    </p>
    <el-carousel
      class="mt-10"
      :autoplay="false"
      :type="responsiveCard"
      height="400px"
    >
      <el-carousel-item v-for="(item, index) in projectList" :key="index">
        <el-card @click="goDetail(item.id)" class="box-card cursor-pointer">
          <template #header>
            {{ item.title }}
          </template>
          <template #default>
            <nuxt-img
              :src="`img${item.imageUrl}`"
              fit="contain"
              format="webp"
              :alt="`img${item.imageUrl}`"
              class="w-full h-72 xs:h-60 object-contain"
            />
          </template>
        </el-card>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped></style>
