import { UserService } from './user.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Global } from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor( public global: Global,
    private userService: UserService, 
    private auth: AuthService, 
    router: Router) {

    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);

        let returnUrl: any = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}

