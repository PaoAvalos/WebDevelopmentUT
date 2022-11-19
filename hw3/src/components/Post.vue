<template>
    <div class="container">
        <div class="sidebar" style="left: 10px"></div>
        <div id="posts" class="main"></div>
        <div class="sidebar" style="right: 10px"></div>
    </div>   
</template>

<script>
import image from "../assets/me.png"
export default {
  name: "Post",
  me: image,
  methods: {
    readJSON() {
      fetch("https://api.npoint.io/b2649a9dc1217bcf7e93")
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            let posts = json;
            posts.map(function (onePost) {
              let post = document.createElement('div');
              post.setAttribute('class', 'post');
              if(onePost.hasOwnProperty('img')) {
                post.innerHTML = `
                        <img class="img" :src="me" alt="pfp" width="40" height="40">${onePost.Ptime}
                        <img class="picture" src=${onePost.img} alt="picture" width="400" height="400">
                        <p>${onePost.name}: ${onePost.texto}</p>
                        <img class="img" :src="assets/like.svg" alt="like" width="60" height="40"><br>
                    `;
              } else {
                post.innerHTML = `
                        <img class="img" src="assets/me.png" alt="pfp" width="40" height="40">${onePost.Ptime}
                        <p>${onePost.name}: ${onePost.texto}</p>
                        <img class="img" src="assets/like.svg" alt="like" width="60" height="40"><br>
                    `;
              }
              document.getElementById('posts').appendChild(post);

            });
          })
    }
  },
  mounted() {
    this.readJSON()
  }
}
</script>

<style>
time {
  margin-left: 80%
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
.post{
  font-family: monospace;
  font-size: 200%;
  text-align: right;
  color: black;
  padding: 20px;
  margin-top: 10px;
  background-color: rgb(210, 210, 210);
  border-radius: 20px;
}
.img{float: left}
.picture {
  margin-top: 10px;
  width: 100%;
  object-fit: contain;
  background-color: rgb(210, 210, 210);
}
.post p{
  display: block;
  margin-top: 30px;
  text-align: left;
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
</style>