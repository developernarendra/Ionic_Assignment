import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CrudService } from '../services/crud.service';
import * as CrudActions from '../actions/crud.actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class CrudEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CrudActions.loadItems),
      mergeMap(() =>
        this.crudService.getItems().pipe(
          map((items) => CrudActions.loadItemsSuccess({ items })),
          catchError((error) => of(CrudActions.loadItemsFailure({ error }))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private crudService: CrudService) {}
}
