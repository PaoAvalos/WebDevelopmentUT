<template>
    <div class="container">
        <div class="sidebar" style="left: 10px"></div>
        <div id="posts" class="main">{{readJSON}}</div>
        <div class="sidebar" style="right: 10px"></div>
    </div>   
</template>

<script>
export default {
  name: "Post",
  computed: {
    readJSON() {
      fetch("https://api.npoint.io/b2649a9dc1217bcf7e93")
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            json.map(function (onePost) {
              let post = document.createElement('div');
              post.setAttribute('class', 'post');
              if(onePost.hasOwnProperty('img')) {
                post.innerHTML = `
                        <img class="img" src="https://i.pinimg.com/236x/d4/a7/ae/d4a7ae925191062983533b1e171bebcd.jpg" alt="pfp" width="60" height="60">${onePost.Ptime}
                        <img class="picture" src=${onePost.img} alt="picture" width="400" height="400">
                        <p>${onePost.name}: ${onePost.texto}</p>
                        <img class="img" src="https://toppng.com/uploads/preview/facebook-like-butto-1156301672887cxlbmue9.png" alt="like" width="40" height="40"><br>
                    `;
              } else {
                post.innerHTML = `
                        <img class="img" src="https://i.pinimg.com/236x/d4/a7/ae/d4a7ae925191062983533b1e171bebcd.jpg" alt="pfp" width="40" height="40">${onePost.Ptime}
                        <p>${onePost.name}: ${onePost.texto}</p>
                        <img class="img" src="https://toppng.com/uploads/preview/facebook-like-butto-1156301672887cxlbmue9.png" alt="like" width="40" height="40"><br>
                    `;
              }
              document.getElementById('posts').appendChild(post);

            });
          })
    }
  },
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
.img{float: left;
  mix-blend-mode: multiply;}
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