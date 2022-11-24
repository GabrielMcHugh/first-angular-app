import { AppUser } from './models/app-user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';

import * as auth from 'firebase/auth';

@Injectable()

export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: auth.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/users/' + uid);
  }

}
