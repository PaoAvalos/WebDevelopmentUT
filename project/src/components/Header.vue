<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">SignUp</router-link>
    </nav>
    <router-view/>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  header {
    width: 100%;
  }
  nav {
    font-family: monospace;
    font-weight: normal;
    margin: 30px 30px 0px 30px;
    padding: 20px;
    background-color: darkcyan;
    border-radius: 20px;
    font-size: 300%;
    color: black;
    text-align: center;
  }
  nav a:link {
    color: black;
    background-color: transparent;
    text-decoration: none;
  }
  nav a:visited {
    color: black;
    background-color: transparent;
    text-decoration: none;
  }
  nav a:hover {
    color: black;
    background-color: crimson;
    text-decoration: none;
    shape-margin: inherit;
    outline-style: solid;
  }
</style>