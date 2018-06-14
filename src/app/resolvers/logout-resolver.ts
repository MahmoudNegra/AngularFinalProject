import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
// import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';


@Injectable()
export class LogoutResolver implements Resolve<any> {
  constructor(private authenticationService: AuthenticationService) {}
  resolve() {

    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      this.authenticationService.logout();

    }
}

}
