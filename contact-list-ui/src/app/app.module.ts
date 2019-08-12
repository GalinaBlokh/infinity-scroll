import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { ContactComponent } from "./contact/contact.component";
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
