import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = new User();  

  constructor(
    private router: Router,
    private auth: AuthenticationService
  ) {
    if(this.auth.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {

  }

  public login() {
    this.auth.login(this.user);
  }
}
