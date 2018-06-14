import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _service: AuthenticationService) { }

  ngOnInit() {
  }

  IsLoggedIn(): boolean {
    return this._service.isLoggedIn();
  }
  getJwtSubject(): string {
    return this._service.getJwtSubject();
  }
}
