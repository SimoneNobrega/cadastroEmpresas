import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { CoursesService } from '../courses/services/courses.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { Location } from '@angular/common';


@Component({
  selector: 'app-courses-form',
  templateUrl: 'courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {

  form = this.formBuilder.group({
    name:[''],
    category: ['']
  });    

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location) { 
    
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => this.onSucess(), error => this.onError());
       
  }

  onCancel(){
    this.location.back();
  }

  private onSucess(){
    this.snackBar.open('Curso salvo com sucesso!', '', {duration: 5000});
    this.onCancel();

  }

  private onError(){
    this.snackBar.open('Erro ao salvar curso.', '', {duration: 5000});

  }
}

