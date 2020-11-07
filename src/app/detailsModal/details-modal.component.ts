import { Component,  } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],

})
export class DetailsModalComponent   {
  genders = ['female', 'male'];

  form = this.fb.group({
    name: ['', Validators.required],
    age: '',
    email: ['', Validators.compose([
      Validators.email,
      Validators.required
    ])],
    gender: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}
}
