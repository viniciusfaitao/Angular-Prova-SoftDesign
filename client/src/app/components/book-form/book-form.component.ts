import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from '../../models/Book';
import { BooksService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {
  book: Book;
  edit = false;

  constructor(
    private bookService: BooksService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.book = new Book();
    this.activatedRoute.params.forEach((params: Params) => {
      const id: number = +params['id'];
      if (id) {
        this.bookService
          .getBook(id)
          .toPromise()
          .then((books: Book) => {
            console.log(books);
            this.book = books;
          });
      }
    });
  }

  saveNewBook() {
    this.bookService.saveBook(this.book).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/livros']);
      },
      (err) => console.error(err)
    );
  }
}
