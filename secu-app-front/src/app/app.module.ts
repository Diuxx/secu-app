import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './_routing/app-routing.module';

// components
import { HomeComponent } from './_components/home/home.component';
import { HeaderComponent } from './_components/header/header.component';
import { LoginComponent } from './_components/login/login.component';

// extern module
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

// services
import { UserService } from './_services/user.service';
import { RightService } from './_services/right.service';
import { AuthenticationService } from './_services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    RightService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
