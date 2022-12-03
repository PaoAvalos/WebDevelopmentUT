<template>
  <div class="post" @click="goToPost()">
    <p id="time">{{data.time}}</p>
    <p>{{data.text}}</p>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: ['data'],
  methods: {
    goToPost() {
      let postData = this.data
      this.$store.commit('setCurrentPost', {postData});
      this.$router.push('/post');
    },
  }
}
</script>

<style>
.post{
  font-family: monospace;
  font-size: 200%;
  text-align: right;
  color: #E7F6F2;
  padding: 20px;
  margin-top: 10px;
  background-color: #395B64;
  border-radius: 20px;
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
