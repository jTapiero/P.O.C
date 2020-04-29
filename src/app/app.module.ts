// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// service

// pipe

// page
import { MainComponent } from './page/main/main.component';

// componnent
import { FormComponent } from './componnent/form/form.component';
import { HeaderComponent } from './componnent/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
