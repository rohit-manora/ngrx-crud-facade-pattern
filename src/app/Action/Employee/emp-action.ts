import { createAction, props } from "@ngrx/store";
import { IEmployee } from "src/app/Helper/Models/employee";


export enum EmployeeActionTypes {
  LoadEmployees = "[Employee] Load Employee",
  LoadEmployeeSuccess = "[Employee] Load Employee Success",
  LoadEmployeesFail = "[Employee] Load Employee Fail",
  LoadEntity = "[Employee] Load Employee",
  LoadEntitySuccess = "[Employee] Load Employee Success",
  LoadEntityFail = "[Employee] Load Employee Fail",
  UpdateEmployee = "[Employee] Update Employee",
  UpdateEmployeeSuccess = "[Employee] Update Employee Success",
  UpdateEmployeeFail = "[Employee] Update Employee Fail",
  DeleteEmployee = "[Employee] Delete Employee",
  DeleteEmployeeSuccess = "[Employee] Delete Employee Success",
  DeletemployeeFail = "[Employee] Delete Employee Fail",
  CreateEmployee = "[Employee] Create Employee",
  CreateEmployeeSuccess = "[Employee] Create Employee Success",
  CreateEmployeeFail = "[Employee] Create Employee Fail"
}

export const loadEntities = createAction(
  EmployeeActionTypes.LoadEmployees,
  props<{ pageNumber: number }>());

export const loadEntitiesSuccess = createAction(
  EmployeeActionTypes.LoadEmployeeSuccess,
  props<{ data: IEmployee[] }>()
);

export const loadEntitiesFail = createAction(
  EmployeeActionTypes.LoadEmployeesFail,
  props<{ error: Error | any }>()
);

export const loadEntity = createAction(
  EmployeeActionTypes.LoadEntity,
  props<{ id: number }>()
);

export const loadEntitySuccess = createAction(
  EmployeeActionTypes.LoadEntitySuccess,
  props<{ entity: IEmployee }>()
);

export const loadEntityFail = createAction(
  EmployeeActionTypes.LoadEntityFail,
  props<{ error: Error | any }>()
);

export const updateEntity = createAction(
  EmployeeActionTypes.UpdateEmployee,
  props<{ update: IEmployee }>()
);

export const updateEntitySuccess = createAction(
  EmployeeActionTypes.UpdateEmployeeSuccess,
  props<{ entity: IEmployee }>()
);

export const updateEntityFail = createAction(
  EmployeeActionTypes.UpdateEmployeeFail,
  props<{ error: Error | any }>()
);

export const fromEntityActions = {
  loadEntities,
  loadEntitiesFail,
  loadEntitiesSuccess,
  loadEntity,
  loadEntityFail,
  loadEntitySuccess,
  updateEntity,
  updateEntitySuccess,
  updateEntityFail
};