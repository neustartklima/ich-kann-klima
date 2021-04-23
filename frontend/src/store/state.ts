import { Law, LawId } from '../types';
import { allLaws } from '../allLaws';

export const state = {
  allLaws,
  acceptedLaws: [] as LawId[],
}

export type State = typeof state