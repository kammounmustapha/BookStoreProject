import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategorieService {

  constructor(private db: AngularFireDatabase) { }

  getCategories(){
    return this.db.list('/categories', ref => ref.orderByChild('name'));
  }
}
