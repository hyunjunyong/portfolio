<script setup lang="ts">
const props = defineProps<{
  Skill: Database['public']['Tables']['skillInfo']['Row'][];
}>();

const duration = (percentage: number) => Math.floor(percentage / 5);
</script>

<template>
  <div>
    <ul>
      <li v-for="(item, index) in Skill" :key="item.name" class="mt-5">
        <el-progress
          class="max-w-[800px] m-auto"
          :text-inside="true"
          :percentage="item.percentage"
          :stroke-width="20"
          :color="item.color"
          striped
          striped-flow
          :duration="duration(item.percentage)"
          ><span class="xs:text-sm"
            >{{ item.name }}:{{ item.percentage }}%</span
          ></el-progress
        >
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
