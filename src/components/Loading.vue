<template>
  <div class="container">
    <div class="loading"></div>
    <h3>Carregando...</h3>
  </div>
</template>

<style scoped>
h3 {
  font-size: 25px;
  position: relative;
  margin-left: 30px;
}
.loading {
  width: 200px;
  height: 200px;
  border: 10px solid brown;
  border-top-color: rgb(247, 175, 175);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
