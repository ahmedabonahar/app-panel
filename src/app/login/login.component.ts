import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  constructor(private _FB: FormBuilder, public authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this._FB.group({
      sectionNameAr: ['', Validators.required],
      sectionNameEn: ['', Validators.required]
    });
  }

  loginSubmit() {

  }

}
