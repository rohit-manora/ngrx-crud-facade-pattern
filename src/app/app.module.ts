import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './Helper/Service/common.service';
import { GeneralFacadeService } from './Helper/Service/general-facade.service';
import { InterceptorService } from './Helper/Service/interceptor.service';
import { EmployeeComponent } from './Module/employee/employee.component';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { appEffects, REDUCER_TOKEN } from './Store/Employee';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './Module/add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot([...appEffects]),
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [
    GeneralFacadeService, CommonService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
