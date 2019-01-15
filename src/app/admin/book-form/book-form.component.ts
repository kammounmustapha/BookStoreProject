import { BookService } from './../../book.service';
import { CategorieService } from './../../categorie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  categories$;

  constructor(categorieService: CategorieService, private bookService: BookService) {
    this.categories$ = categorieService.getCategories().valueChanges();
   }

   save(book){
    this.bookService.create(book);
  }

  ngOnInit() {
  }

}
