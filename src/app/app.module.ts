import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SharedModule } from './shared/shared.module';
import { EmployerLoginComponent } from './auth/employer-login/employer-login.component';
import { StudentLoginComponent } from './auth/student-login/student-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    EmployerLoginComponent,
    StudentLoginComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
