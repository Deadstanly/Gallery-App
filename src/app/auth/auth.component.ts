import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {UserInfo} from "../models/UserInfo";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.myForm = formBuilder.group({
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  submit() {
    this.authService.login(this.myForm.value).subscribe({
      next: (data) => {
        const user = UserInfo.getInstance();
        user.email = this.myForm.value.email;
        user.token = data.token;
        console.log(user.token)
        this.router.navigateByUrl('/main-page').then();
      },
      error: () => {alert("Error")},
      complete: () => {{console.log(this.myForm)}}
    })
  }
}
