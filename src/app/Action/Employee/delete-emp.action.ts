import { createAction, props } from "@ngrx/store";
import { EmployeeActionTypes } from "./emp-action";



export const deleteEmployee = createAction(
    EmployeeActionTypes.DeleteEmployee,
    props<{ id: number }>()
  );
  
  export const deleteEmployeeSuccess = createAction(
    EmployeeActionTypes.DeleteEmployeeSuccess
  );
  
  export const deleteEmployeeFail = createAction(
    EmployeeActionTypes.DeletemployeeFail,
    props<{ error: Error | any }>()
  );

  export const fromDeleteEmpActions = {
    deleteEmployee,
    deleteEmployeeSuccess,
    deleteEmployeeFail
  };