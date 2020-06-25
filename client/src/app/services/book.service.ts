import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private API_URI = 'http://localhost:5555';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(`${this.API_URI}/livros`);
  }

  getRentedBooks() {
    return this.http.get(`${this.API_URI}/livrosAlugados`);
  }

  getBook(id: number) {
    return this.http.get(`${this.API_URI}/livros/${id}`);
  }

  getRentedBook(id: number) {
    return this.http.get(`${this.API_URI}/livrosAlugados/${id}`);
  }

  deleteBook(id: number) {
    return this.http.delete(`${this.API_URI}/livros/${id}`);
  }

  deleteRentedBook(id: number) {
    return this.http.delete(`${this.API_URI}/livrosAlugados/${id}`);
  }

  saveBook(book: Book) {
    return this.http.post(`${this.API_URI}/livros`, book);
  }

  saveRentedBook(book: Book) {
    return this.http.post(`${this.API_URI}/livrosAlugados`, book);
  }

  updateBook(id: string | number, updatedBook: Book): Observable<Book> {
    return this.http.put<Book>(`${this.API_URI}/livros/${id}`, updatedBook);
  }
}
