<script lang="ts" setup>
const tableData = [
  {
    profile: '1998.01.21',
    contact: 'email : hjy123432@gmail.com',
  },
  {
    profile: '커넥트 웨이브 재직중(2022-02 ~)',
    contact: 'phone : 010-7714-4649',
  },
  {
    profile: '제주대학교 졸업(2022.08)',
    contact: 'Github : https://github.com/hyunjunyong',
  },
  {
    profile: '1998.01.21',
    contact: 'blog : https://hjycoinfe.tistory.com/',
  },
];
</script>

<template>
  <div class="common-layout p-10 h-screen">
    <el-container class="h-full">
      <el-header class="text-center text-2xl font-bold border-b-4"
        >Hyun's Portfolio</el-header
      >
      <el-container class="mt-10">
        <el-aside width="200px"
          ><el-row class="tac h-full">
            <el-col :span="24">
              <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo h-full"
                default-active="2"
                text-color="#fff"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon><location /></el-icon>
                    <span>Navigator One</span>
                  </template>
                  <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                  </el-menu-item-group>
                  <el-sub-menu index="1-4">
                    <template #title>item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                  </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="2">
                  <el-icon><icon-menu /></el-icon>
                  <span>Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <el-icon><document /></el-icon>
                  <span>Navigator Three</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <el-icon><setting /></el-icon>
                  <span>Navigator Four</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row></el-aside
        >
        <el-main>
          <ul class="flex gap-5 justify-center items-center">
            <li class="w-40 h-40">
              <img
                src="../assets/img/myimage.jpg"
                alt=""
                class="w-full h-full"
              />
            </li>
            <li>
              안녕하세요 프론트엔드 개발자 현준용입니다! 혼자하는것보단
              여러사람과 협업하여 커뮤니케이션을 하는 것을 즐기고 어려운 문제에
              직면해도 해결하기 위해 끊임없이 도전하는 것을 지향합니다.
            </li>
          </ul>
          <el-table :data="tableData" style="width: 60%" class="m-auto">
            <el-table-column prop="profile" label="프로필" width="300" />
            <el-table-column prop="contact" label="contact" width="300" />
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped></style>
