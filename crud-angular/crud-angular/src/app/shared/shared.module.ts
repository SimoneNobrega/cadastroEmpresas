import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule} from './app-material/app-material.module';
import { CategoryPipe } from './pipes/category.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,   
    
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    MatFormFieldModule,
    MatCardModule
      
  ],
  exports: [
    ErrorDialogComponent,
    CategoryPipe
  ],
})
export class SharedModule { }
