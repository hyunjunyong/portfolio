<script lang="ts" setup>
const emits = defineEmits<{
  (event: 'ok'): void;
  (event: 'close', value: boolean): void;
}>();
</script>

<template>
  <Teleport to="body">
    <div>
      <div
        class="z-10 h-screen w-screen fixed left-0 top-0 bg-opacity-20 bg-black"
        @click="$emit('close', false)"
      ></div>
      <div
        class="modal min-w-[420px] xs:min-w-[240px] bg-white rounded-lg shadow p-8 xs:p-5 z-20 fixed left-2/4 top-2/4 translate-y-[-50%] translate-x-[-50%] overflow-y-auto"
      >
        <p
          class="mb-[10px] xs:mb-[8px] text-pc-title24-sb xs:text-mo-title14-sb text-slate-800"
        >
          <slot name="header" />
        </p>
        <slot name="content" />

        <div
          class="flex gap-[30px] justify-end items-end mt-[30px] xs:mt-[24px]"
        >
          <button class="text-slate-300" @click="$emit('close', false)">
            <slot name="gray_btn" />
          </button>
          <button class="text-purple" @click="$emit('ok')">
            <slot name="purple_btn" />
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  button {
    @apply text-pc-title18-sb xs:text-mo-button12-sb;
  }
  .modal::-webkit-scrollbar-thumb {
    @apply bg-slate-400 rounded-lg;
  }
  .modal::-webkit-scrollbar-track {
    @apply bg-slate-200;
  }
}
.modal {
  max-height: calc(100vh - 100px);
}
.modal::-webkit-scrollbar {
  width: 6px;
}
</style>
