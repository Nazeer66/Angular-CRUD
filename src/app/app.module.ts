import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { myfirstService } from './app.service';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ProductComponent } from './product/product.component';
import { AddDataComponent } from './add-data/add-data.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { SearchbarPipe } from './product/searchbar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ProductComponent,
    AddDataComponent,
    SearchUserComponent,
    SearchbarPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [myfirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
