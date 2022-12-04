<template>
  <div class="post" @click="goToPost()">
    <img class="img" src='../assets/pfp.png' alt="pfp" width="60" height="60">
    <p id="time">{{data.time}}</p>
    <p>{{data.body}}</p>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: ['data'],
  methods: {
    goToPost() {
      let postData = this.data
      this.$router.push('/api/post/' + postData.id);
    },
  }
}
</script>

<style>
.post{
  word-wrap: break-word;
  font-family: monospace;
  font-size: 200%;
  text-align: right;
  color: #E7F6F2;
  padding: 20px;
  margin-top: 10px;
  background-color: #395B64;
  border-radius: 20px;
}
.img {
  display: inline-block;
  float: left;
  border-radius: 50px;
}
.like{
  float: left;
  cursor: pointer;
}
.like:hover{
  width: 45px;
  height: 45px;
}
#time {
  margin: 0;
  text-align: right;
}
p{
  display: block;
  font-size: 100%;
  text-align: left;
}
#like {
  margi-left: 60px;
  margin-top: 35px;
}
</style>
