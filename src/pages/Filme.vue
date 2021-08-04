<template>
  <div class="filme">
    <div v-if="loading" class="loading">
      <Loading />
    </div>
    <div v-else class="container">
      <h2>{{ filme.nome }}</h2>
      <img :src="filme.foto" alt="" />
      <h3>sinopse</h3>
      <p>{{ filme.sinopse }}</p>
      <div class="botoes">
        <router-link tag="button" to="/">Ver mais filmes</router-link>
        <button @click="salvarfilmes">Salvar</button>
        <button>
          <a
            :href="`https://youtube.com/results?search_query=${filme.nome}`"
            target="blank"
            >Trailer</a
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../service/api";
import Loading from "../components/Loading.vue";
export default {
  props: ["id"],
  data() {
    return {
      filme: {},
      loading: true,
    };
  },
  components: {
    Loading,
  },
  async created() {
    const response = await api.get(`?api=filmes/${this.id}`);
    this.filme = response.data;
    this.loading = false;
  },
  methods: {
    salvarfilmes() {
      const minhalista = localStorage.getItem("myfilme");
      let filmes = JSON.parse(minhalista) || [];
      const hasfilme = filmes.some((filme) => filme.id === this.filme.id);
      if (hasfilme) {
        alert("filme já foi salvo anteriormente");
        return;
      }
      filmes.push(this.filme);
      localStorage.setItem("myfilme", JSON.stringify(filmes));
      alert("filme salvo com sucesso ");
    },
  },
};
</script>

<style scoped>
.loading {
  margin-top: 205px;
}
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 900px;
}

h2 {
  color: #fff;
  margin-bottom: 0px;
  background: brown;
  padding: 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.container img {
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

button {
  margin-right: 5px;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  border: 0;
  padding: 12px;
  font-size: 20px;
  transition: all 0.5s;
  outline: none;
}
button:hover {
  background: brown;
  color: #fff;
}

a {
  text-decoration: none;
  color: #000;
  transition: all 0.5s;
}

a:hover {
  color: #fff;
}
</style>
