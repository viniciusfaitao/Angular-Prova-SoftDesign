import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { BookDescriptionComponent } from './components/book-description/book-description.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { RentedBookComponent } from './components/rented-book/rented-book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'usuarios',
    component: UsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'logar',
    component: LoginComponent,
  },
  {
    path: 'registrar',
    component: RegisterComponent,
  },
  {
    path: 'livros',
    component: BookListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'livrosAlugados',
    component: RentedBookComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'livros/adicionar',
    component: BookFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'livros/editar/:id',
    component: BookEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'livros/descricao/:id',
    component: BookDescriptionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'livros',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
