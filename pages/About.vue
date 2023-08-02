<template>
  <div id="content">
    <div id="nav">
      <div class="navTitle">
        <h1>PortFolio</h1>
      </div>
      <div class="navMenu">
        <ul>
          <li><a @click="scrollMoveIntro()">Intro</a></li>
          <li><a @click="scrollMoveProfile()">Profile</a></li>
          <li><a @click="scrollMoveProject()">Project</a></li>
          <li><a @click="scrollMoveSkill()">Skill</a></li>
        </ul>
      </div>
    </div>
    <div>
      <div class="intro" ref="intro">
        <h1>Intro</h1>
        <img src="../assets/myImg.jpeg" alt="" />
        <dl>
          <dt>
            <h3>현준용 || FrontEnd Portfolio</h3>
          </dt>
          <dd>
            안녕하세요 프론트엔드 개발자 현준용입니다! 혼자하는것보단 여러사람과
            협업하여 커뮤니케이션을 하는 것을 즐기고 어려운 문제에 직면해도
            해결하기 위해 끊임없이 도전하는 것을 지향합니다.
          </dd>
        </dl>
      </div>
      <div class="profile" ref="profile">
        <h1>Profile</h1>
        <table>
          <thead>
            <tr>
              <td>프로필</td>
              <td>연락처</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  <li>1998.01.21</li>
                  <li>2021.07 스마트 SW 경진대회(최우수상 수상)</li>
                  <li>2021.10 Sw 중심대학 공동창업 camp(대상 수상)</li>
                  <li>제주대학교 졸업(2022.08)</li>
                  <li>카비오스 재직중 (2022.02.26 ~ )</li>
                </ul>
              </td>
              <td>
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="project" ref="project">
        <h1>Project</h1>
        <div class="myProject"></div>
        <div class="CoProject"></div>
      </div>
      <div class="skill" ref="skill">
        <h1>Skill</h1>
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
      </div>
    </div>
  </div>
</template>
<!-- scrollIntoView 군요

behavior smooth -->
<script>
export default {
  name: 'name',
  data() {
    return {};
  },
  methods: {
    scrollMoveIntro() {
      this.$refs.intro.scrollIntoView({ behavior: 'smooth' });
    },
    scrollMoveProfile() {
      this.$refs.profile.scrollIntoView({ behavior: 'smooth' });
    },
    scrollMoveProject() {
      this.$refs.project.scrollIntoView({ behavior: 'smooth' });
    },
    scrollMoveSkill() {
      this.$refs.skill.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style lang="css" scoped>
#content {
  width: 100%;
}

.navTitle {
  text-align: center;
}
.navMenu {
  float: right;
}
.navMenu ul {
  display: flex;
  gap: 10px;
  list-style-type: none;
}
.navMenu ul a {
  font-size: 1.2rem;
}

.intro img {
  width: 180px;
  height: 200px;
  border-radius: 50%;
}
.intro {
  padding: 10px;
  background-color: #00b9ce;
}
.intro dl {
  text-align: center;
  width: 70%;
  margin: 0 auto;
}
.profile {
  padding: 10px;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  background-color: #83cdbe;
}
.project {
  padding: 10px;
  background-color: #0064a2;
}
.skill {
  padding: 10px;
  background-color: #7bb6d4;
}
.profile ul li {
  margin-bottom: 10px;
}
.profile dl {
  display: flex;
  gap: 30px;
}
th,
td {
  border-bottom: 1px solid #444444;
  padding: 10px;
}

table {
  border-spacing: 20px;
}
.skill table {
  margin: 0 auto;
}
.skill td img {
  margin-right: 2px;
}
h1 {
  text-align: center;
}
</style>
