import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   ngForm: FormGroup;
   submitted = false;
  constructor(
       private  formBuilder :FormBuilder
  ) { }

  ngOnInit() {
      this.ngForm = this.formBuilder.group({
          email :['',Validators.required],
          password :['',[Validators.required,Validators.minLength(6)]]
      });
  }
  OnSummit(){
      this.submitted = true;
      if (this.ngForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)')
  }

}
