<template>
  <button @click="logout()">Logout</button>
  <button @click="logout()">Login</button>
  <div class="container">
    <div class="sidebar" style="left: 10px"/>
    <div class="main" id="posts">
      <Post v-for="post in posts" :data="post"/>
    </div>
    <div class="sidebar" style="right: 10px"/>
  </div>
  <button @click="deleteAll()">Delete All</button>
  <button @click="addPost()">Add Post</button>
</template>

<script>
import Post from '@/components/Post.vue'
import auth from "@/auth";

export default {
  name: 'home',
  components: {
    Post,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    logout() {
    console.log("logging out")
      fetch("http://localhost:3000/api/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        this.$router.push("/login");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
    addPost() {
      this.$router.push("/api/addpost");
    },
    async deleteAll(){
      let authResult = await auth.authenticated();
      if (!authResult) {
        this.$router.push("/login");
      } else {
        fetch(`http://localhost:3000/api/posts`, {
          method: "DELETE",
          headers: {"Content-Type": "application/json"},
        })
        .then((response) => {
          this.fetchPosts()
        })
        .catch((e) => {
          console.log(e);
        });
      }
    },
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
          .then((response) => response.json())
          .then((data) => (this.posts = data))
          .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    this.fetchPosts();
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
  margin: 30px 5px 0px 5px;
}
button:hover {
  color: #E7F6F2;
  background-color: #2C3333;
  text-decoration: none;
  shape-margin: inherit;
  border-style: solid;
  border-color: #2C3333;
  margin: 30px 5px 0px 5px;
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
