import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmpolyerComponent } from './empolyer/create-empolyer/create-empolyer.component';
import { ListEmpolyeeComponent } from './empolyer/list-empolyee/list-empolyee.component';
import { UpdateEmpolyeeComponent } from './empolyer/update-empolyee/update-empolyee.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmpolyerComponent,
    ListEmpolyeeComponent,
    UpdateEmpolyeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
