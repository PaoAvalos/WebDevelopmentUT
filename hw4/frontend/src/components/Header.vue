<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">LogIn</router-link>
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
    background-image: url("../assets/giphy.gif");
    font-family: monospace;
    font-weight: normal;
    margin: 30px 30px 0px 30px;
    padding: 20px;
    background-color: rgb(57,91,100, 50%);
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
    color: black;
    background-color: #A5C9CA;
    text-decoration: none;
    border-style: solid;
    border-color: black;
    border-radius: 20px;
    padding: 7px;
  }
</style>