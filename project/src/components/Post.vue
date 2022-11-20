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
p{
  display: block;
  margin-top: 30px;
  text-align: left;
}
</style>
