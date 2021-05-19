import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import GamePage from "./views/GamePage.vue"
import StartPage from "./views/StartPage.vue"
import MainPage from "./views/MainPage.vue"

const routes: RouteRecordRaw[] = [
  { path: "/", component: MainPage },
  { path: "/start", component: StartPage },
  { path: "/games", component: GamePage },
  { path: "/games/:id", component: GamePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
