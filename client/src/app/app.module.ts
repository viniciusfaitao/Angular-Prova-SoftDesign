import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { BookDescriptionComponent } from './components/book-description/book-description.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { RentedBookComponent } from './components/rented-book/rented-book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { FilterPipe } from './filter.pipe';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { BooksService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    BookListComponent,
    BookFormComponent,
    BookDescriptionComponent,
    RentedBookComponent,
    LoginComponent,
    RegisterComponent,
    FilterPipe,
    BookEditComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
    BooksService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
