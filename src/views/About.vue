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
    <div class="project"></div>
    <div class="skill">
      <table>
        <tbody>
          <tr>
            <td>📒 Language</td>
            <td>
              <img
                src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=flat-the-badge&logo=JavaScript&logoColor=white"
              />
              <img
                src="https://img.shields.io/badge/TYPESCRIPT-%233178C6?style=flat-the-badge&logo=TypeScript&logoColor=white"
              />
            </td>
          </tr>
          <tr>
            <td>📕 Framework / Library</td>
            <td>
              <img
                src="https://img.shields.io/badge/VUE-%234FC08D?style=flat-the-badge&logo=Vue.Js&logoColor=white"
              />
              <img
                src="https://img.shields.io/badge/VUEX-%233178C6?style=flat-the-badge&logo=Vuex&logoColor=white"
              />
              <img
                src="https://img.shields.io/badge/-VUE--ROUTER-%234FC08D?style=flat-the-badge"
              />
              <img
                src="https://img.shields.io/badge/NODEJS-%23339933?style=flat-the-badge&logo=Node.Js&logoColor=white"
              />
              <img
                src="https://img.shields.io/badge/VUETIFY-%231867C0?style=flat-the-badge&logo=Vuetify&logoColor=white"
              />
            </td>
          </tr>
          <tr>
            <td>📗 Tool</td>
            <td>
              <img
                src="https://img.shields.io/badge/github-181717?style=flat-the-badge&logo=github&logoColor=white"
              />
              <img
                src="https://img.shields.io/badge/git-F05032?style=flat-the-badge&logo=git&logoColor=white"
              />
            </td>
          </tr>
          <tr>
            <td>📘 MarkUp</td>
            <td>
              <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=flat-the-badge&logo=HTML5&logoColor=white"
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=flat-the-badge&logo=CSS3&logoColor=white"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <dl>
        <dt></dt>
        <dd></dd>
      </dl>
      <dl>
        <dt></dt>
        <dd></dd>
      </dl>
      <dl>
        <dt></dt>
        <dd></dd>
      </dl>
      <dl>
        <dt></dt>
        <dd></dd>
      </dl>
    </div>
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

th,
td {
  border-bottom: 1px solid #444444;
  padding: 10px;
}
table {
  border-spacing: 20px;
}
.skill td img {
  margin: 5px;
}
</style>
