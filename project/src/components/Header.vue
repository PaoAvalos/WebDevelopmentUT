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
    background-color: #395B64;
    border-radius: 20px;
    font-size: 300%;
    color: #E7F6F2;
    text-align: center;
  }
  nav a:link {
    color: #E7F6F2;
    background-color: transparent;
    text-decoration: none;
  }
  nav a:visited {
    color: #E7F6F2;
    background-color: transparent;
    text-decoration: none;
  }
  nav a:hover {
    color: #395B64;
    background-color: #A5C9CA;
    text-decoration: none;
    shape-margin: inherit;
    border-style: solid;
    border-color: #2C3333;
  }
</style>