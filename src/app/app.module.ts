import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductdashboardComponent } from './productdashboard/productdashboard.component';
import { RouterModule,Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';
const appRoutes: Routes=[
  {path:'',component:ProductdashboardComponent},
  {path:'edit/:id_produit',component:ProductEditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductdashboardComponent,
    ProductEditComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( [{path:'',component:ProductdashboardComponent},
    {path:'edit/:id_produit',component:ProductEditComponent}]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()

  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
