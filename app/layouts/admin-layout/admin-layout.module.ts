import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule,Routes } from "@angular/router";
//import { RouterModule } from "@angular/router";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { SickinfoComponent } from "../../pages/sickinfo/sickinfo.component"; 
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import {MatSelectModule} from '@angular/material/select';
import { SelectDropDownModule } from 'ngx-select-dropdown';
// import { RtlComponent } from "../../pages/rtl/rtl.component";
import { MedicalService } from '../../medical.service' ;
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


// const routes: Routes = [
//   {path: 'sick_info' , component: SickinfoComponent},
//   {path: '', redirectTo: 'sick_info', pathMatch: 'full'}
// ]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    //RouterModule.forChild(routes),
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    AngularMultiSelectModule,
    MatSelectModule,
    SelectDropDownModule,
    NgMultiSelectDropDownModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    SickinfoComponent,
    // RtlComponent
  ],
  providers: [MedicalService]
})
export class AdminLayoutModule {}
