<template>
  <div class="post">
    <slot />
  </div>
</template>

<script>

export default {
  name: 'Post',
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
.img{float: left;}
.like{
  float: left;
  cursor: pointer;
}
.like:hover{
  width: 45px;
  height: 45px;
}
.picture {
  margin-top: 10px;
  width: 100%;
  object-fit: contain;
  background-color: #395B64;
}
p{
  display: block;
  margin-top: 80px;
  text-align: left;
}
p1{
  display: block;
  font-size: 120%;
  margin-left: 60px;
  margin-top: 35px;
  text-align: left;
}
</style>
