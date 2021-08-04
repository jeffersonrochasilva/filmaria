<template>
  <div id="header">
    <router-link to="/" exact class="meusfilmes">Filmaria </router-link>
    <router-link tag="button" exact to="/myfilmes">Salvos </router-link>
  </div>
</template>
<style scoped>
#header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background: brown;
}
a {
  text-decoration: none;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
}
button {
  cursor: pointer;
  border: 0;
  padding: 5px 15px;
  outline: none;
  background: #fff;
  border-radius: 5px;
  font-weight: bold;
}
</style>
