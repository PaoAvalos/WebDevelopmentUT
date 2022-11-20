<template>
  <div class="container">
    <div class="sidebar" style="left: 10px"></div>
    <div class="main" id="posts">
      <Post v-for="data in $store.state.json">
        <img class="img" src='../assets/pfp.png' alt="pfp" width="60" height="60">{{data.time}}
        <div v-if="data.hasOwnProperty('img')">
          <img class="picture" :src=data.img alt="picture" width="400" height="400">
        </div>
        <div v-else />
        <p>{{data.username}}: {{data.text}}</p>
        <img class="like" v-on:click="data.counter += 1" src='../assets/like.svg' alt="like" width="40" height="40">
        <p1>{{data.counter}}</p1><br>
      </Post>
    </div>
    <div class="sidebar" style="right: 10px"></div>
  </div>
  <button v-on:click="$store.commit('resetLikes')">Reset Likes</button>
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
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
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
}
button:hover {
  color: #E7F6F2;
  background-color: #2C3333;
  text-decoration: none;
  shape-margin: inherit;
  border-style: solid;
  border-color: #2C3333;
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
