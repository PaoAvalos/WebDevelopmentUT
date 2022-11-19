<template>
  <Header />
  <Post />
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Post from './components/Post.vue'

export default {
  name: 'App',
  components: {
    Header,
    Post,
    Footer,
  }
}
</script>

<style></style>
