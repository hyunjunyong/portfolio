<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>{{ route.params.id }}번 프로젝트입니다.</div>
</template>

<style scoped></style>
