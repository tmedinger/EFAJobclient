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
import { EmployerSignupComponent } from './auth/employer-signup/employer-signup.component';
import { StudentSignupComponent } from './auth/student-signup/student-signup.component';
import { EmployerModule } from './employer/employer.module';
import { NotificationsComponent } from './student/student-dashboard/notifications/notifications.component';
import { JobsAppliedComponent } from './student/profile/jobs-applied/jobs-applied.component';
<<<<<<< HEAD
import { StudentDashboardComponent } from './student-dashboard/student-dashboard/student-dashboard.component';
=======
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
>>>>>>> a8362d8d6cab36c1a99be4522a763e531daf6f43

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
<<<<<<< HEAD
    StudentDashboardComponent,
=======
    PageNotFoundComponent,
>>>>>>> a8362d8d6cab36c1a99be4522a763e531daf6f43
  ],
  imports: [
    EmployerModule,
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    AppRoutingModule,
=======
    AppRoutingModule
    
>>>>>>> ed0fbe0aff4f936324ac8f0324bf8b7a3ec10fd4
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
