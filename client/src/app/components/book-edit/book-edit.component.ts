import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from '../../models/Book';
import { BooksService } from '../../services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})
export class BookEditComponent implements OnInit {
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

  updateBook() {
    this.bookService.updateBook(this.book.id, this.book).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/livros/descricao']);
      },
      (err) => console.error(err)
    );
  }
}
