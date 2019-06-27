import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { InputComponent } from './input/input.component';
import { getUserService } from './get-user.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [getUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
