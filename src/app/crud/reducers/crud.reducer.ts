import { createReducer, on } from '@ngrx/store';
import * as CrudActions from '../actions/crud.actions';

export interface State {
  items: any[];
  error: any;
}

export const initialState: State = {
  items: [],
  error: null,
};

export const crudReducer = createReducer(
  initialState,
  on(CrudActions.loadItemsSuccess, (state, { items }) => ({ ...state, items })),
  on(CrudActions.loadItemsFailure, (state, { error }) => ({ ...state, error })),
  on(CrudActions.createItemSuccess, (state, { item }) => ({ ...state, items: [...state.items, item] })),
  on(CrudActions.createItemFailure, (state, { error }) => ({ ...state, error })),

  // Fixing the updateItemSuccess handler
  on(CrudActions.updateItemSuccess, (state, { item }) => ({
    ...state,
    items: state.items.map((i) => (i.id === item.id ? item : i)),
  })),

  on(CrudActions.updateItemFailure, (state, { error }) => ({ ...state, error })),

  // Fixing the deleteItemSuccess handler
  on(CrudActions.deleteItemSuccess, (state, { id }) => ({
    ...state,
    items: state.items.filter((item) => item.id !== id),
  })),

  on(CrudActions.deleteItemFailure, (state, { error }) => ({ ...state, error })),
);
