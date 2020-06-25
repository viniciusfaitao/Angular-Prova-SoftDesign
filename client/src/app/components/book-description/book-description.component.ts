import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from '../../models/Book';
import { BooksService } from '../../services/book.service';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.css'],
})
export class BookDescriptionComponent implements OnInit {
  books: Book[];
  book: Book;
  isDisabled = false;

  constructor(
    private bookService: BooksService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.book = new Book();
    this.activatedRoute.params.forEach((params: Params) => {
      const id: number = +params['id'];
      if (id) {
        this.bookService
          .getBook(id)
          .toPromise()
          .then((book: Book) => {
            console.log(book);
            this.book = book;
          });
      }
      if (id) {
        this.bookService
          .getRentedBook(id)
          .toPromise()
          .then((book: Book) => {
            this.isDisabled = true;
          });
      }
    });
  }

  saveNewRentedBook() {
    this.bookService.saveRentedBook(this.book).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/livros']);
        alert('Livro alugado com sucesso');
      },
      (err) => console.error(err, alert('Livro ja está alugado!!'))
    );
  }

  delBook(id: number) {
    this.bookService
      .deleteBook(id)
      .toPromise()
      .then(
        (books: Book[]) => {
          this.books = books;
        },
        (err) => console.log(err)
      );
  }

  delRentedBook(id: number) {
    this.bookService
      .deleteRentedBook(id)
      .toPromise()
      .then(
        (books: Book[]) => {
          this.books = books;
        },
        (err) => console.log(err)
      );
  }
}
