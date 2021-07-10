import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { fromEntityActions } from 'src/app/Action/Employee/emp-action';
import { IEmployee } from 'src/app/Helper/Models/employee';
import { GeneralFacadeService } from 'src/app/Helper/Service/general-facade.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  // public entityForm: FormGroup;
  public empForm: any;
  public isEdit: boolean = false;

  constructor(
    private generalService: GeneralFacadeService,
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<any>,
    private fb: FormBuilder
  ) {
    this.initializeEmployeeForm();
    console.log('data', data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    const entity = this.data;

    this.isEdit = entity ? true : false;
    if (!this.isEdit) {
      this.initializeEmployeeForm();
    } else {
    }
    this.initUpdateForm(entity || {});
  }

  save(value: any): void {
    if (this.isEdit) {
      this.store.dispatch(fromEntityActions.updateEntity({ update: value }));
    } else {
      this.generalService.createEmployee(value);
    }
    this.onNoClick();
  }

  private initUpdateForm(emp: IEmployee) {
    if (emp) {
      this.empForm.get('id').setValue(emp.id);
      this.empForm.get('email').setValue(emp.email);
      this.empForm.get('first_name').setValue(emp.first_name);
      this.empForm.get('last_name').setValue(emp.last_name);
      this.empForm.get('avatar').setValue(emp.avatar);
    }
  }

  public initializeEmployeeForm() {
    this.empForm = this.fb.group({
      id: [''],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      avatar: [''],
    });
  }
}
