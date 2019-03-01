import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoemsComponent } from './components/poems/poems.component';
import { PoemItemComponent } from './components/poem-item/poem-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PoemsComponent,
    PoemItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
