import { Component } from '@angular/core';
import { GeneralFacadeService } from './Helper/Service/general-facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TCE-Assignment';
  public data = {};
  constructor() {
    //  this.general.getEmployees(1);
  }

}
