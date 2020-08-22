<template>
  <div class="home">
    <header class="header"></header>
    <main class="content">
      <div class="content_views">
        <div class="col-md-7">
          <v-page-title class="mb-3" />
          <router-view />
        </div>
      </div>
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import Aluno from "./Alunos/Aluno";
export default {
  name: "Home",
  components: {
    Aluno,
  },
};
</script>

<style>
.home {
  height: 100vh;
  display: grid;
  grid-template-areas: "header" "content" "footer";
  grid-template-rows: 50px 1fr 70px;
  grid-template-columns: 1fr;
}

.header {
  grid-area: header;
  background-color: var(--primary-color);
  border-bottom: 6px solid var(--secondary-color);
}

.content {
  grid-area: content;
  height: calc(100vh - 120px);
  padding: 15px 40px;
  background-color: var(--bg-color);
}

.content_views {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer {
  grid-area: footer;
  background-color: var(--primary-color);
  border-top: 6px solid var(--secondary-color);
}
</style>