import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db
        .list('/categories', (ref) => ref.orderByChild('name'))
        .snapshotChanges()
        .pipe(
        map((actions: any) => {
            return actions.map((action: any) => ({
                key: action.key,
                val: action.payload.val(),
            }));
        }));
  }
}