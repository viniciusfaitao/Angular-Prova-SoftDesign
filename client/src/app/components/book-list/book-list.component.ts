import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { BooksService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BooksService) {}

  ngOnInit() {
    this.getLivros();
  }

  getLivros() {
    this.bookService
      .getBooks()
      .toPromise()
      .then((books: Book[]) => {
        this.books = books;
      })
      .catch((err) => console.log(err));
  }
}
