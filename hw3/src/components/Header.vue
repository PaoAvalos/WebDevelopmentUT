<template>
    <header>
        <h1>
            <a href="index.html">Home</a>|<a href="signup.html">SignUp</a>
        </h1>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

header {
    width: 100%;
}
h1 {
    font-family: monospace;
    font-weight: normal;
    margin: 30px 30px 0px 30px;
    padding: 20px;
    background-color: darkcyan;
    border-radius: 20px;
    font-size: 300%;
    color: black;
}
a:link {
    color: black;
    background-color: transparent;
    text-decoration: none;
}
a:visited {
    color: black;
    background-color: transparent;
    text-decoration: none;
}
a:hover {
    color: black;
    background-color: crimson;
    text-decoration: none;
    shape-margin: inherit;
    outline-style: solid;
}
</style>