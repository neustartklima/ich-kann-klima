import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import GamePage from "./views/GamePage.vue"

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/games" },
  { path: "/games", component: GamePage },
  { path: "/games/:id", component: GamePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
