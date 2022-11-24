import { UserService } from './user.service';
import { AppUser } from './models/app-user';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user$: Observable<auth.User | any>;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth, 
    private route: ActivatedRoute) { 
    this.user$ = afAuth.authState;
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
      .pipe(
        switchMap(user => { 
         if (user) return this.userService.get(user!.uid).valueChanges();

         return of(null);
        }));
        // this.userService.get(user!.uid).valueChanges()));

  }
}
