import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
//import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { MatSelectModule } from '@angular/material/select';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { MedicalService } from './medical.service' ;





@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    SelectDropDownModule,
    MatSelectModule,
    AngularMultiSelectModule,
    AngularMultiSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    NgSelectModule,
   // RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent],
  providers: [MedicalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
