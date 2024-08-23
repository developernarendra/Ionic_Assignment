import { createAction, props } from '@ngrx/store';

export const loadItems = createAction('[CRUD] Load Items');
export const loadItemsSuccess = createAction('[CRUD] Load Items Success', props<{ items: any[] }>());
export const loadItemsFailure = createAction('[CRUD] Load Items Failure', props<{ error: any }>());

export const createItem = createAction('[CRUD] Create Item', props<{ item: any }>());
export const createItemSuccess = createAction('[CRUD] Create Item Success', props<{ item: any }>());
export const createItemFailure = createAction('[CRUD] Create Item Failure', props<{ error: any }>());

export const updateItem = createAction('[CRUD] Update Item', props<{ item: any }>());
export const updateItemSuccess = createAction('[CRUD] Update Item Success', props<{ item: any }>());
export const updateItemFailure = createAction('[CRUD] Update Item Failure', props<{ error: any }>());

export const deleteItem = createAction('[CRUD] Delete Item', props<{ id: number }>());
export const deleteItemSuccess = createAction('[CRUD] Delete Item Success', props<{ id: number }>());
export const deleteItemFailure = createAction('[CRUD] Delete Item Failure', props<{ error: any }>());
