import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { store } from "./store"
import { loadGame, startGame } from "./store/actions"
import MainPage from "./views/MainPage.vue"
import GamePage from "./views/GamePage.vue"

const routes: RouteRecordRaw[] = [
  { path: "/", component: MainPage },
  { path: "/games", component: GamePage, beforeEnter: () => store.dispatch(startGame()) },
  {
    path: "/games/:id",
    component: GamePage,
    beforeEnter: (to) => store.dispatch(loadGame(to.params.id as string)),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
