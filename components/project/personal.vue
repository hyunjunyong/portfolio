<script setup lang="ts"></script>

<template>
  <div>
    <p class="text-center text-2xl xs:text-xl font-bold xs:font-semibold">
      개인 프로젝트
    </p>
    <el-card class="box-card mt-5">
      <template #header>
        <div class="font-bold">
          <p>웹툰 사이트</p>
        </div>
      </template>
      <div
        class="flex gap-5 justify-between sm:flex-wrap-reverse xs:flex-wrap-reverse sm:justify-center"
      >
        <ul class="pl-2">
          <li>기간 : 2021.09 ~ 2021.12</li>
          <li>Skill : Vue2, Vuetify , Vuex</li>
          <li class="flex gap-2">
            <p>URL :</p>
            <el-link
              type="success"
              href="https://github.com/hyunjunyong/WEBTOON/"
              target="_blank"
              >Git</el-link
            >
            <el-link
              type="success"
              href="https://www.youtube.com/watch?v=Poc69s8sO08&list=PLqbWuGdVBJd0-Bd2wqieXWXfQdzyBX-gf"
              target="_blank"
              >Youtube</el-link
            >
          </li>
          <li>
            담당 역할 :

            <p class="ml-2">백엔드와 api 연동</p>
            <p class="ml-2">작가홈, 웹툰홈 페이지 제작 및 디자인</p>
          </li>
        </ul>
        <nuxt-img
          src="/img/webtoon.png"
          alt="/img/webtoon.png"
          format="webp"
          fit="contain"
          width="400"
          height="200"
        />
      </div>
    </el-card>
    <el-card class="box-card mt-5">
      <template #header>
        <div class="font-bold">
          <p>중간거리 약속잡기(혼디모앙)</p>
        </div>
      </template>
      <div
        class="flex gap-5 justify-between sm:flex-wrap-reverse xs:flex-wrap-reverse sm:justify-center"
      >
        <ul class="pl-2">
          <li>기간: 2021.03 ~ 2021.07</li>
          <li>Skill : HTML5, CSS3, JavaScript</li>
          <li>
            성과 :
            <p class="ml-2">2021.07 스마트SW경진대회(최우수상 수상)</p>
            <p class="ml-2">2021.10 Sw중심대학 공동창업 camp(대상 수상)</p>
          </li>
          <li class="flex gap-2">
            <p>URL :</p>
            <el-link
              type="success"
              href="https://github.com/hyunjunyong/middle-location-pg"
              target="_blank"
              ><span>Git</span></el-link
            >
            <el-link
              type="success"
              href="https://hyunjunyong.github.io/middle-location-pg/"
              target="_blank"
              >Page</el-link
            >
          </li>
          <li class="">
            <p>담당 역할 :</p>
            <p class="ml-2">사용자에게 주변 추천 장소 기능 추가</p>
            <p class="ml-2">각 사용자에 위치에서 교통편 , 거리 구현</p>
            <p class="ml-2">장소 추천 api 연동</p>
          </li>
        </ul>
        <nuxt-img
          src="/img/middle-location.png"
          alt="/img/middle-location.png"
          format="webp"
          fit="contain"
          width="300"
          height="200"
        />
      </div>
    </el-card>
    <el-card class="box-card mt-5">
      <template #header>
        <div class="font-bold">
          <p>제주대학교 소개 웹사이트</p>
        </div>
      </template>
      <div
        class="flex justify-between gap-5 sm:flex-wrap-reverse sm:justify-center"
      >
        <ul class="pl-2">
          <li>기간 : 2020.12 ~ 2021.01</li>
          <li>Skill : HTML5, CSS3, JavaScript</li>
          <li>성과 : 카카오 주관 팀 프로젝트 완성</li>
          <li class="flex gap-2">
            <p>URL :</p>
            <el-link
              type="success"
              href="https://github.com/hyunjunyong/jeju242.github.io"
              target="_blank"
              >Git</el-link
            >
            <el-link
              type="success"
              href="https://jeju242.github.io/"
              target="_blank"
              >Page</el-link
            >
          </li>
          <li>
            담당 역할 :
            <p class="ml-2">제주대학교 소개하는 간단한 퀴즈 기능 구현</p>
            <p class="ml-2">댓글 Discuss Api연동</p>
          </li>
        </ul>
        <nuxt-img
          src="/img/jeju.png"
          alt="/img/jeju.png"
          format="webp"
          width="400"
          height="200"
          fit="contain"
        />
      </div>
    </el-card>
  </div>
</template>

<style scoped></style>
