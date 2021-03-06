// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// cesium
import { AngularCesiumModule } from 'angular-cesium';
import { AngularCesiumWidgetsModule } from 'angular-cesium';
// import { CameraService } from 'angular-cesium';

// service

// pipe
import { NameFilePipe } from './core/pipe/name-file.pipe';

// material
import { MatCardModule } from '@angular/material/card';

// page
import { MainComponent } from './page/main/main.component';
import { LoginPageComponent } from './page/login-page/login-page.component';

// componnent
import { FormComponent } from './component/header/form-input-file/form.component';
import { HeaderComponent } from './component/header/header.component';
import { DisplayComponent } from './component/cesium-display/cesium-display.component';
import { ListComponent } from './component/view-log/list-view-log/list.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { ViewLogComponent } from './component/view-log/view-log.component';
import { SingleLogViewComponent } from './component/view-log/single-log-view/single-log-view.component';
import { PositionLogComponent } from './component/cesium-display/position-log/position-log.component';





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
    NameFilePipe,
    PositionLogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule,
  //  CameraService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
