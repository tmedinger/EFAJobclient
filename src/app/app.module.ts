import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { EmployerLoginComponent } from './auth/employer-login/employer-login.component';
import { StudentLoginComponent } from './auth/student-login/student-login.component';
import { headersToString } from '../../node_modules/@types/selenium-webdriver/http';
import { EmployerSignupComponent } from './auth/employer-signup/employer-signup.component';
import { StudentSignupComponent } from './auth/student-signup/student-signup.component';
import { EmployerModule } from './employer/employer.module';
import { NotificationsComponent } from './student/student-dashboard/notifications/notifications.component';
import { JobsAppliedComponent } from './student/profile/jobs-applied/jobs-applied.component';
import { StudentDashboardComponent} from './student/student-dashboard/student-dashboard/student-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    AuthComponent,
    EmployerLoginComponent,
    StudentLoginComponent,
    EmployerSignupComponent,
    StudentSignupComponent,
    NotificationsComponent,
    JobsAppliedComponent,
    PageNotFoundComponent,
    StudentDashboardComponent
  ],
  imports: [
    EmployerModule,
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
