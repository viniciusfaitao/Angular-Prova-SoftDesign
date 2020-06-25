import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { BooksService } from '../../services/book.service';

@Component({
  selector: 'app-rented-book',
  templateUrl: './rented-book.component.html',
  styleUrls: ['./rented-book.component.css'],
})
export class RentedBookComponent implements OnInit {
  books: Book[];
  isDisabled = false;

  constructor(
    private bookService: BooksService,
  ) { }

  ngOnInit() {
    this.getRentedBooks();
  }

  getRentedBooks() {
    this.bookService
      .getRentedBooks()
      .toPromise()
      .then((books: Book[]) => {
        this.books = books;
      })
      .catch((err) => console.log(err));
  }

  delRentedBook(id: number) {
    this.bookService
      .deleteRentedBook(id)
      .toPromise()
      .then(
        (books: Book[]) => {
          this.books = books;
          this.getRentedBooks();
          alert('Livro está disponivel novamente!!');
        },
        (err) => console.log(err)
      );
  }
}
