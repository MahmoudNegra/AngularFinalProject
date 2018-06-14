import { Component, OnInit } from '@angular/core';
import { User } from '../../domain/user';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import {  FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User = new User();
  loading: boolean = false;
  returnUrl: string;
  error = '';
  constructor(private _authservice: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // reset login status
      this._authservice.logout();
      // get return url from route partameters or default "/""
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.loading = true;
    this._authservice.login(this.user.username, this.user.password)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
    },
    error => {
        this.error = error;
        this.loading = false;
    }
    );
  }

}
