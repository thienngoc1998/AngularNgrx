import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngForm :FormGroup;
  constructor(
      public formBuilder :FormBuilder
  ) { }

  ngOnInit() {
      this.ngForm = this.formBuilder.group({
          email :['',[Validators.required,Validators.email]],
          password :['',[Validators.required,Validators.minLength(6)]],
      });
  }
    OnSummit(){
        if (this.ngForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)')
    }

}
