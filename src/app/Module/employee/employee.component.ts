import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, of } from 'rxjs';
import { CommonService } from 'src/app/Helper/Service/common.service';
import { GeneralFacadeService } from 'src/app/Helper/Service/general-facade.service';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
 public list$: Observable<any> = of();
 public employeeList: any;
 public colSpan = 7;

 @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private generalService: GeneralFacadeService, private commonService: CommonService,public dialog: MatDialog    ) { }

  ngOnInit(): void {
    this.generalService.getEmployeesList({pageNumber: 1});
    this.list$ = this.generalService.employeeList$;
  }

  public onDelete(id: any) {
    const result = confirm("Are you sure you want to delete this Employee?");

    if (result) {
      this.generalService.deleteEmployee(id);
    }
  }

  public onEdit(item: any) {
    this.addNewEmployee(item);
  }

  public addNewEmployee(data: any) {
    let dialogRef = this.dialog.open(AddEmployeeComponent, {
      height: '450px',
      width: '600px',
      data: data
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(`Dialog result: ${res}`);
      if(res) {
        // dialogRef.close('');
      }
    });
    
  }

  
  public onPageChanged(event: any) {
    if(event) {
      this.generalService.getEmployeesList({pageNumber: 1+event.pageIndex});
    }
  }

}
