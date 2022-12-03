<template>
  <div class="container">
    <div class="sidebar" style="left: 10px"/>
    <div class="main" id="posts">
      <Post v-for="data in $store.state.json" :data="data"/>
    </div>
    <div class="sidebar" style="right: 10px"/>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
  name: 'HomeView',
  components: {
    Post,
  },
}
</script>

<style>
body{
  background-color: black;
}
.container{
  display: flex;
}
.main {
  display: inline-block;
  width: 70%;
  margin: 20px;
}
.sidebar {
  display: inline-block;
  position: relative;
  margin: 20px;
  width: 15%;
  min-height: 100%;
  background-color: rgb(57,91,100, 50%);
  border-radius: 20px;
  background-image: url("../assets/giphy.gif");
}
button{
  font-family: monospace;
  font-size: 200%;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  margin: 5px;
}
button:hover {
  color: #E7F6F2;
  background-color: #2C3333;
  text-decoration: none;
  shape-margin: inherit;
  border-style: solid;
  border-color: #2C3333;
  margin: 5px;
}
@media (max-width: 1000px) {
  header {
    font-size: 50%;
  }
  h1 {
    margin-bottom: 0
  }
  .main {
    width: 100%;
    margin: 0;
  }
  .img {
    width: 30px;
    height: 30px
  }
  .container {
    flex-direction: column;
    width: 100%;
    font-size: 100%;
  }
}
</style>
