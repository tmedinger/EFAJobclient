import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { FileSelectDirective } from 'ng2-file-upload';
import { EmployerModule } from './employer/employer.module';
import { JobsAppliedComponent } from './student/profile/jobs-applied/jobs-applied.component';
import { ProfileFormComponent } from '../app/student/profile/profile-form/profile-form.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent} from './student/profile/profile.component';
import { ApplyComponent } from './student/apply/apply.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployerLoginComponent } from './auth/employer-login/employer-login.component';
import { EmployerSignupComponent } from './auth/employer-signup/employer-signup.component';
import { StudentLoginComponent } from './auth/student-login/student-login.component';
import { StudentSignupComponent } from './auth/student-signup/student-signup.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    AuthComponent,
    JobsAppliedComponent,
    ProfileFormComponent,
    PageNotFoundComponent,
    ProfileComponent,
    ApplyComponent,
    EmployerLoginComponent,
    EmployerSignupComponent,
    StudentLoginComponent,
    StudentSignupComponent,
    StudentDashboardComponent,
  ],
  imports: [
    EmployerModule,
    BrowserModule, 
    SharedModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
