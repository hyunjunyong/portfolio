<template>
  <div id="name">
    <div class="intro">
      <div>
        <img src="../assets/myImg.jpeg" alt="" />
      </div>
      <div>
        <h3>현준용 || Portfolio</h3>
        안녕하세요 프론트엔드 개발자 현준용입니다! 혼자하는것보단 여러사람과
        협업하여 커뮤니케이션을 하는 것을 즐기고 어려운 문제에 직면해도 해결하기
        위해 끊임없이 도전하는 것을 지향합니다.
      </div>
    </div>
    <div class="profile">
      <div>
        <h3>프로필</h3>
        <ul>
          <li>1998.01.21</li>
          <li>2021.07 스마트 SW 경진대회(최우수상 수상)</li>
          <li>2021.10 Sw 중심대학 공동창업 camp(대상 수상)</li>
          <li>제주대학교 졸업(2022.08)</li>
          <li>카비오스 재직중 (2022.02.26 ~ )</li>
        </ul>
      </div>
      <div>
        <h3>연락처</h3>
        <dl>
          <dt>email</dt>
          <dd>hjy123432@gmail.com</dd>
        </dl>
        <dl>
          <dt>phone</dt>
          <dd>010-7714-4649</dd>
        </dl>
        <dl>
          <dt>github</dt>
          <dd>https://github.com/hyunjunyong</dd>
        </dl>
      </div>
    </div>
    <div class=""></div>
    <div class=""></div>
    <div class=""></div>
    <div class="context"></div>
  </div>
</template>

<script>
export default {
  name: 'name',
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.intro,
.profile {
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
}
.intro img {
  width: 180px;
  height: 200px;
  border-radius: 50%;
}
ul {
  padding: 0;
}
dd {
  margin: 0;
}
</style>
