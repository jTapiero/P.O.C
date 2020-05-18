// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// service

// pipe

// material
import { MatCardModule } from '@angular/material/card';

// page
import { MainComponent } from './page/main/main.component';
import { LoginPageComponent } from './page/login-page/login-page.component';

// componnent
import { FormComponent } from './component/form/form.component';
import { HeaderComponent } from './component/header/header.component';
import { DisplayComponent } from './component/display/display.component';
import { ListComponent } from './component/list/list.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { ViewLogComponent } from './component/view-log/view-log.component';
import { SingleLogViewComponent } from './component/single-log-view/single-log-view.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MainComponent,
    HeaderComponent,
    DisplayComponent,
    ListComponent,
    LoginPageComponent,
    LoginFormComponent,
    ViewLogComponent,
    SingleLogViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
