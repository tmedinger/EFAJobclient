import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StudentModule } from '../app/student/student.module';
import { EmployerModule } from '../app/employer/employer.module';
import { EmployerLoginComponent } from '../app/auth/employer-login/employer-login.component';
import { StudentLoginComponent } from '../app/auth/student-login/student-login.component';
import { EmployerSignupComponent } from '../app/auth/employer-signup/employer-signup.component';
import { StudentSignupComponent } from '../app/auth/student-signup/student-signup.component';
import { AuthComponent } from './auth/auth.component';
@NgModule({
  declarations: [
    AppComponent,  
    NavbarComponent,
    FooterComponent, 
    LayoutComponent,
    PageNotFoundComponent,
    EmployerLoginComponent,
    StudentLoginComponent,
    EmployerSignupComponent,
    StudentSignupComponent,
    AuthComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, 
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StudentModule,
    EmployerModule,
  ],
  exports: [
    FormsModule,
    BrowserModule, 
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StudentModule,
    EmployerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
