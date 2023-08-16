<script setup lang="ts">
import type { CarouselProps } from 'element-plus/es/components/carousel/src/carousel';

const props = defineProps<{
  projectList: Database['public']['Tables']['projectlist']['Row'][];
}>();

const responsiveCard = ref<CarouselProps['type']>('card');
const openModal = ref<boolean[]>([false, false, false, false]);

const goDetail = (index: number) => {
  navigateTo(`/project/detail/${index}`);
};

onMounted(() => {
  window.innerWidth >= 640
    ? (responsiveCard.value = 'card')
    : (responsiveCard.value = '');
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
        <el-card
          @click="openModal[index] = true"
          class="box-card cursor-pointer"
        >
          <template #header>
            {{ item.title }}
          </template>
          <template #default>
            <nuxt-img
              :src="`img${item.imageUrl}`"
              fit="contain"
              format="webp"
              class="w-full h-72 xs:h-60 object-contain"
            />
            <!-- class="w-full h-[300px] xs:h-60 object-contain" -->
            <!-- <el-image
              :src="`img${item.imageUrl}`"
              fit="contain"
              class="w-full h-[300px] xs:h-60"
            /> -->
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
                <el-button @click="openModal[index] = false">취소 </el-button>
                <el-button type="primary" @click="goDetail(item.id)">
                  자세히 보기
                </el-button>
              </span>
            </template>
          </el-dialog>
        </ClientOnly>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped></style>
