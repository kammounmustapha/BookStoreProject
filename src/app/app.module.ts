import { BookService } from './book.service';
import { CategorieService } from './categorie.service';
import { AdminAuthGarde } from './admin-auth-garde.service';
import { UserService } from './user.service';
import { AuthGarde } from './auth-garde.service';
import { AuthService } from './auth.service';
import { AdminBooksComponent } from './admin/admin-books/admin-books.component';
import { LoginComponent } from './login/login.component';
import { environment } from './../environments/environment'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { BookFormComponent } from './admin/book-form/book-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    BooksComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    AdminBooksComponent,
    LoginComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'books', component: BooksComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'login', component: LoginComponent},

      { 
        path: 'check-out', 
        component: CheckOutComponent,
        canActivate: [AuthGarde]
      },
      { 
        path: 'order-success',
        component: OrderSuccessComponent, 
        canActivate: [AuthGarde] 
      },
      { 
        path: 'my/orders', 
        component: MyOrdersComponent, 
        canActivate: [AuthGarde] 
      },

      { 
        path: 'admin/books', 
        component: AdminBooksComponent, 
        canActivate: [AuthGarde, AdminAuthGarde] 
      },
      { 
        path: 'admin/books/new', 
        component: BookFormComponent, 
        canActivate: [AuthGarde, AdminAuthGarde] 
      },
      { 
        path: 'admin/orders', 
        component: AdminOrdersComponent, 
        canActivate: [AuthGarde, AdminAuthGarde] 
      }
    ])
  ],
  providers: [
    AuthService,
    AuthGarde,
    UserService,
    AdminAuthGarde,
    CategorieService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
