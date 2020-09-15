import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { SortBarComponent } from './components/header/sort-bar/sort-bar.component';
import { LoginElementComponent } from './components/header/login-element/login-element.component';
import { MoreDetailsBlockComponent } from './components/search-item/more-details-block/more-details-block.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SearchBarComponent,
    SortBarComponent,
    LoginElementComponent,
    MoreDetailsBlockComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
