import { NameSpace } from '../../const';
import { State } from './../../types/state';

export const getSelectedCategory = (state: State) =>
  state[NameSpace.App].selectedCategory;

export const getStatusDataLoading = (state: State) =>
  state[NameSpace.App].dataIsLoading;
