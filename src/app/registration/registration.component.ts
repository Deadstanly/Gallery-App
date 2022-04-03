import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.form = formBuilder.group({
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  submitRegistration() {
    this.authService.registration(this.form.value).subscribe(
      data => console.log(data)
    )
  }

}
