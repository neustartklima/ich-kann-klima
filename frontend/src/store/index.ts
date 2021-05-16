import { InjectionKey } from "vue"
import {
  createStore,
  useStore as baseUseStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  ActionContext,
} from "vuex"
import { actions } from "./actions"
import { mutations } from "./mutations"
import { getters } from "./getters"
import { state, State } from "./state"

export type Mutations = typeof mutations
export type Actions = typeof actions
export type Getters = typeof getters

type StoreFuncs = "getters" | "commit" | "dispatch"
type CommitProp = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
}
type DispatchProp = {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
}
type GettersProp = {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}
type MutationsProp = {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
}

export type Store = Omit<VuexStore<State>, StoreFuncs> & CommitProp & DispatchProp & GettersProp
export type Context = Omit<ActionContext<State, State>, "commit"> & MutationsProp
export const key: InjectionKey<Store> = Symbol()
export function useStore(): Store {
  return baseUseStore(key)
}

export const store = createStore<State>({
  state,
  mutations,
  actions,
  getters,
})
