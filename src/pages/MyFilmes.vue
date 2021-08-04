<template>
  <div class="myfilmes">
    <h1>Meus Filmes</h1>
    <span v-if="filmes.length <= 0">Você não possui nem um filme salvo.</span>

    <ul>
      <li v-for="item in filmes" :key="item.id">
        <span>{{ item.nome }}</span>
        <div>
          <router-link tag="button" :to="`/filme/${item.id}`"
            >Ver detales</router-link
          >
          <button @click="excluir(item.id)">Excluir</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filmes: [],
    };
  },
  created() {
    const minhalista = localStorage.getItem("myfilme");
    this.filmes = JSON.parse(minhalista) || [];
  },
  methods: {
    excluir(id) {
      let filtroFilmes = this.filmes.filter((item) => {
        return item.id !== id;
      });
      return (this.filmes = filtroFilmes);
    },
  },
  watch: {
    filmes() {
      localStorage.setItem("myfilme", JSON.stringify(this.filmes));
    },
  },
};
</script>

<style scoped>
.myfilmes {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}

ul {
  padding: 0;
}

li {
  padding: 0;
  list-style: none;
  min-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  margin-left: 0;
}
span {
  font-size: 25px;
}
</style>
