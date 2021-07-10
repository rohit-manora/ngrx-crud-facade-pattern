import { createAction, props } from "@ngrx/store";
import { IEmployee } from "src/app/Helper/Models/employee";
import { EmployeeActionTypes } from "./emp-action";

export const createEmployee = createAction(
    EmployeeActionTypes.CreateEmployee,
    props<{ new: IEmployee }>()
  );
  
  export const createEmployeeSuccess = createAction(
    EmployeeActionTypes.CreateEmployeeSuccess,
    props<{ entity: IEmployee }>()
  );
  
  export const createEmployeeFail = createAction(
    EmployeeActionTypes.CreateEmployeeFail,
    props<{ error: Error | any }>()
  );

  export const fromCreateEmpActions = {
    createEmployee,
    createEmployeeSuccess,
    createEmployeeFail
  };