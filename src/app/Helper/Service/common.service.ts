import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEmployee, IEmployeeResponse } from '../Models/employee';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private baseURL: string = 'https://reqres.in/api/users';
  constructor(private _http: HttpClient) {}

  public getEmployees(pageNumber: any): Observable<any> {
    let url = this.baseURL + '?page=:page'.replace(':page', pageNumber);
    return this._http.get(url).pipe(
      map((res) => {
        let data: IEmployeeResponse | any = res;
        return data;
      })
    );
  }

  public createEmployee(payload: IEmployee) {
    let url = this.baseURL;
    return this._http.post(url, payload).pipe(
      map((res) => {
        let data: any = res;
        return data;
      })
    );
  }

  public updateEmployee(id: any, payload: any): Observable<any> {
    let url = this.baseURL.replace(':page', id);
    return this._http.post(url, payload).pipe(
      map((res) => {
        let data: IEmployeeResponse | any = res;
        return data;
      })
    );
  }

  public deleteEmployee(id: any): Observable<any> {
    let url = this.baseURL + '/' + id;
    return this._http.delete(url).pipe(
      map((res) => {
        let data: IEmployeeResponse | any = res;
        return data;
      })
    );
  }
}
