import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";
import { fromCreateEmpActions } from "src/app/Action/Employee/create-emp.action";
import { fromDeleteEmpActions } from "src/app/Action/Employee/delete-emp.action";
import { fromEntityActions } from "src/app/Action/Employee/emp-action";
import { CommonService } from "src/app/Helper/Service/common.service";

@Injectable()
export class EntityEffects {
  loadEntities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEntityActions.loadEntities),
      switchMap(({ pageNumber }) =>
        this.commonService.getEmployees(pageNumber).pipe(
          map((res: any) => {
            return fromEntityActions.loadEntitiesSuccess({
              data: res.data
            });
          }),
          catchError(error => {
            return of(
              fromEntityActions.loadEntitiesFail({
                error
              })
            );
          })
        )
      )
    )
  );

  createEntity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCreateEmpActions.createEmployee),
      switchMap(action =>
        this.commonService.createEmployee(action.new).pipe(
          map((res: any) => {
            return fromCreateEmpActions.createEmployeeSuccess({
              entity: res.data
            });
          }),
          catchError(error => {
            return of(
              fromCreateEmpActions.createEmployeeFail({
                error
              }),
            );
          })
        )
      )
    )
  );

  deleteEntity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromDeleteEmpActions.deleteEmployee),
      switchMap(action =>
        this.commonService.deleteEmployee(action.id).pipe(
          map(() => {
            return fromDeleteEmpActions.deleteEmployeeSuccess();
          }),
          catchError(error => {
            return of(
              fromDeleteEmpActions.deleteEmployeeFail({
                error
              }),
            );
          })
        )
      )
    )
  );

  updateEntity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEntityActions.updateEntity),
      switchMap(action =>
        this.commonService.updateEmployee(action.update.id, action.update).pipe(
          map((res: any) => {
            return fromEntityActions.updateEntitySuccess({
              entity: res.data
            });
          }),
          catchError(error => {
            return of(
              fromEntityActions.updateEntityFail({
                error
              }),
              // undo(action)
            );
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private commonService: CommonService
  ) {}
}