import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   ngForm: FormGroup;
   maxDate;
  constructor(
       private  formBuilder :FormBuilder
  ) { }

  ngOnInit() {
      this.maxDate =new Date();
      this.maxDate.setFullYear(this.maxDate.getFullYear()-21);
      this.ngForm = this.formBuilder.group({
          email :['',[Validators.required,Validators.email]],
          password :['',[Validators.required,Validators.minLength(6)]],
          birthDay :['',Validators.required],
      });
  }
  OnSummit(){
      if (this.ngForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)')
  }

}
