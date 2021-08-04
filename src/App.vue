<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
#app,
html,
body {
  width: 100%;
  // height: 100%;
}
#app {
  width: 100%;
  display: flex;
  // justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
</style>
