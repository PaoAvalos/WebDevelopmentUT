<template>
  <div class="post">
    <p>Edit Post</p>
    <div class="textInp">
      <p>Post</p>
      <input type="text" required v-model="post.body" />
    </div>
    <div>
      <button @click="updatePost()">Update</button>
      <button @click="deletePost()">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostView.vue",
  data(){
    return {
      post:{
        id: "",
        body: "",
      }
    }
  },
  methods: {
    fetchAPost(id) {
      fetch(`http://localhost:3000/api/posts/${id}`)
          .then((response) => response.json())
          .then((data) => (this.post = data))
          .catch((err) => console.log(err.message));
    },
    updatePost() {
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/api/home");
          })
          .catch((e) => {
            console.log(e);
          });
    },
    deletePost() {
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/api/home");
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.fetchAPost(this.$route.params.id);
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