<template>
  <b-container>
     <div>
    <b-navbar toggleable type="light" variant="light">
    <img id="menuLogo" src="./assets/books.png">
        <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
        <b-navbar-brand>Bookstore</b-navbar-brand>
        <b-collapse is-nav id="nav_text_collapse">
            <b-navbar-nav>
                <b-nav-item href="#/">Show Book List</b-nav-item>
                <b-nav-item href="#/add-book">Add a new Book</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
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

#menuLogo {
    padding-right: 0.5cm;
}
</style>
