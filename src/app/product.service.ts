import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product: any) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db
      .list('/products')
      .snapshotChanges()
      .pipe(
        map((actions: any) => {
            return actions.map((action: any) => ({
                key: action.key,
                val: action.payload.val(),
            }));
        }));
  }

  get(productId: string) {
    return this.db.object('/products/' + productId);
  }

  update(productId: string, product: string) {
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId: string){
    return this.db.object('/products/' + productId).remove();
  }

}