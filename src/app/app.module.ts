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
import { EmployerModule } from './employer/employer.module';
import { NotificationsComponent } from './student/student-dashboard/notifications/notifications.component';
import { JobsAppliedComponent } from './student/profile/jobs-applied/jobs-applied.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard/student-dashboard.component';
import { ProfileFormComponent } from '../app/student/profile/profile-form/profile-form.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    AuthComponent,
    NotificationsComponent,
    JobsAppliedComponent,
    StudentDashboardComponent,
    ProfileFormComponent,
    PageNotFoundComponent,
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
