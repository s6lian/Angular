import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetalComponent } from './employee-detal/employee-detal.component';
import { EmployeeService } from './employee.service';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetalComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
