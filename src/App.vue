<template>
  <b-container>
    <div id="content">
    <img src="./assets/books.png">
    </div>
    <h1>Bookstore</h1>
    <router-view/>
  </b-container>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
#content {
    position: relative;
}
#content img {
    position: absolute;
    top: 0px;
    right: 0px;
}
</style>
