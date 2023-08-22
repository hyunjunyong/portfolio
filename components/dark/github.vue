<script setup lang="ts">
const store = useDarkStore();
const iconColorMode = computed(() => {
  return store.isDark ? 'white' : 'black';
});
</script>

<template>
  <div>
    <Icon name="uil:github" :color="iconColorMode" class="w-6 h-6" />
  </div>
</template>

<style scoped></style>
