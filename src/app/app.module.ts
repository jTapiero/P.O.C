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
import { DisplayComponent } from './componnent/display/display.component';
import { ListComponent } from './componnent/list/list.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { LoginFormComponent } from './conponnent/login-form/login-form.component';

import { MaterialFileInputModule } from 'ngx-material-file-input';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MainComponent,
    HeaderComponent,
    DisplayComponent,
    ListComponent,
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialFileInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
