import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

   OnSubmit(): void {
    console.log('submit');
    console.log(this.loginForm.value);
  }

}
