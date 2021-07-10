import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromCreateEmpActions } from 'src/app/Action/Employee/create-emp.action';
import { fromDeleteEmpActions } from 'src/app/Action/Employee/delete-emp.action';
import { fromEntityActions } from 'src/app/Action/Employee/emp-action';
import { selectAllEntities } from 'src/app/Store/Employee/Selector/emp.selector';
import { IEmployee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class GeneralFacadeService {
  employeeList$ = this.store.select(selectAllEntities);
  
  constructor(private store: Store<any>) {}

  public getEmployeesList(pageNumber: any) {
    this.store.dispatch(fromEntityActions.loadEntities(pageNumber));
  }

  public getEmployees(pageNumber: any) {
    console.log(';srca ahsdakd');
  }

  public deleteEmployee(id: any) {
    this.store.dispatch(fromDeleteEmpActions.deleteEmployee({ id }));
  }

  public createEmployee(empItem: IEmployee) {
    this.store.dispatch(fromCreateEmpActions.createEmployee( { new: empItem }));
  }

  public updateEmployee(empItem: IEmployee) {
    this.store.dispatch(fromEntityActions.updateEntity( { update: empItem }));
  }
}
