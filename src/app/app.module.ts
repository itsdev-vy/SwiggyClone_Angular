import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { SearchComponent } from "./search/search.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    SearchComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
