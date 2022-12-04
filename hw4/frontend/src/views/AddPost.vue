<template>
  <div class="post">
    <p>Create Post</p>
    <div class="textInp">
      <p>Post</p>
      <input type="text" id="body" required v-model="post.body" />
    </div>
    <div>
      <button @click="addPost()">Post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "addpost",
  data() {
    return {
      post: {
        body: "",
      },
    };
  },
  methods: {
    addPost() {
      let date = new Date().toJSON().slice(0, 10);
      let time = new Date().toJSON().slice(12, 16);
      time = date+" "+time;
      var data = {
        body: this.post.body,
        time: time,
      };
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
          .then((response) => {
            this.$router.push("/api/home");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
  },
}
</script>

<style scoped>
.post {
  display: inline-block;
  width: 70%;
  text-align: center;
}
p {
  text-align: center;
}
.textInp{
  display: flex;
  text-align: center;
  margin-left: 25%;
  margin-bottom: 20px;
}
.textInp p{
  margin-right: 20px;
}
input {
  font-family: monospace;
  font-size: 100%;
  padding: 10px;
  margin-top: 0px;
  border-radius: 20px;
  border: none;
  width: 50%;
}
button {
  text-align: center;
}
</style>