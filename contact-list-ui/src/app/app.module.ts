import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ContactComponent} from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
