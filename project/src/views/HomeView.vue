<template>
  <div class="container">
    <div class="sidebar" style="left: 10px"></div>
    <div class="main" id="posts">
      <Post v-for="data in json">
        <img class="img" src='../assets/me.png' alt="pfp" width="60" height="60">{{data.time}}
        <img class="picture" :src=data.img alt="picture" width="400" height="400">
        <p>{{data.username}}: {{data.text}}</p>
        <img class="img" v-on:click="data.counter += 1" src='../assets/like.svg' alt="like" width="40" height="40">{{data.counter}}<br>
      </Post>
    </div>
    <div class="sidebar" style="right: 10px"></div>
  </div>
  <button v-on:click="resetLikes">Reset Likes</button>
</template>

<script>
import Post from '@/components/Post.vue'
import json from '@/assets/objects.json'

export default {
  name: 'HomeView',
  components: {
    Post,
  },
  data(){
    return{
      json: json,
      counter: 0,
    }
  },
  methods:{
    resetLikes(){
      this.json.map(function (onePost) {
        onePost.counter = 0
      })
    }
  }
}
</script>

<style>
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
  background-color: darkcyan;
  border-radius: 20px;
}
button{
  font-family: monospace;
  font-size: 200%;
  padding: 10px;
  border-radius: 20px;
}
</style>
