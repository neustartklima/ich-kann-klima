import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { store } from "./store"
import { loadGame, startGame } from "./store/actions"
import GamePage from "./views/GamePage.vue"
import StartPage from "./views/StartPage.vue"
import MainPage from "./views/MainPage.vue"

const routes: RouteRecordRaw[] = [
  { path: "/", component: MainPage },
  { path: "/start", component: StartPage },
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
