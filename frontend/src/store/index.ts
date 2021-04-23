import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { state, State } from './state';

export const key: InjectionKey<Store<State>> = Symbol();

export const createCommand = (name: string, payload: Record<string, unknown>): Record<string, unknown> => ({ type: name, ...payload });
export const createMutation = (name: string, payload: Record<string, unknown>): Record<string, unknown> => ({ type: name, ...payload });

export const store = createStore<State>({
  state,
  mutations,
  actions,
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
