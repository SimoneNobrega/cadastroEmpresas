import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';
import { SharedModule } from '../shared/shared.module';


import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';




@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
   
  ],
  exports: [ErrorDialogComponent]
})
export class CoursesModule { }
