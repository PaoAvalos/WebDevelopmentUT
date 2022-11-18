<template>
    <div class="container">
        <div class="sidebar" style="left: 10px"></div>
        <div id="posts" class="main"></div>
        <div class="sidebar" style="right: 10px"></div>
    </div>   
</template>

<script>
export default {
    name: "Post"
}
</script>

<style scoped>

.container{
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: space-around;
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
div + p {
    font-family: monospace;
    text-align: center;
    font-size: 150%;
    padding: 5px;
    margin-top: 20px;
    width: 100%;
    background-color: darkcyan;
    border-radius: 20px;
    flex-direction: column-reverse;
}
.main {
    display: inline-block;
    width: 70%;
    margin: 20px;
}
div >p {
    box-sizing: border-box;
}
.post{
    font-family: monospace;
    font-weight: normal;
    font-size: 200%;
    text-align: right;
    color: black;
    padding: 20px;
    margin-top: 10px;
    background-color: rgb(210, 210, 210);
    border-radius: 20px;
    object-fit: contain;
}
.post p{
    display: block;
    margin-top: 30px;
    text-align: left;
}
p::first-letter {
    text-transform: uppercase;
}
</style>