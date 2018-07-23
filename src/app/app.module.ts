import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { myfirstService } from './app.service';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ProductComponent } from './product/product.component';
import { AddDataComponent } from './add-data/add-data.component';
import { SearchUserComponent } from './search-user/search-user.component';

import { SearchbarPipe } from './product/searchbar.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: ':home', component: HomeComponent },
  { path: ':pro', component: ProductComponent },
  { path: ':service', component: SearchUserComponent },
  { path: '**', redirectTo: '/home' }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ProductComponent,
    AddDataComponent,
    SearchUserComponent,
    SearchbarPipe,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [myfirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
