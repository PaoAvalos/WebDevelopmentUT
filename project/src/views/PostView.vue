<template>
  <div class="post">
    <p>Edit Post</p>
    <div class="textInp">
      <p>Post</p>
      <input type="text" :placeholder="$store.state.currentPost[0].text" v-model="newText" />
    </div>
    <button @click="updatePost()">Update</button>
    <button @click="deletePost()">Delete</button>
  </div>
</template>

<script>
export default {
  name: "PostView.vue",
  data(){
    return {newText: ""}
  },
  methods: {
    updatePost() {
      let text = this.newText
      console.log(text)
      this.$store.commit('updatePost', {text});
      this.$router.push('/');
    },
    deletePost() {
      this.$store.commit('deletePost');
      this.$router.push('/');
    },

  }
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