import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class BookService {

  constructor(private db: AngularFireDatabase) { }

  create(book) {
    return this.db.list('/books').push(book);
  }

}
