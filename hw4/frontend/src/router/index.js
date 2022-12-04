import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import LogInView from "@/views/LogInView.vue";
import PostView from "@/views/PostView.vue";
import AddPost from "@/views/AddPost.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () =>
        import ("../views/HomeView.vue")
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView
  },
  {
    path: '/api/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/api/post/:id',
    name: 'post',
    component: PostView
  },
  {
    path: '/api/addpost',
    name: 'addpost',
    component: AddPost
  },
  {
    path: "/:catchAll(.*)",
    name: 'home',
    component: HomeView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
