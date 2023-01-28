import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { toDoItem } from './toDoItem/toDoItem.component';

@NgModule({
  declarations: [
    AppComponent,
    toDoItem
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
