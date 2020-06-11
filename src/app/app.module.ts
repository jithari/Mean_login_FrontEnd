import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';


import { appRoutes } from './routes';
import { HttpClient } from 'selenium-webdriver/http';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { WorkAreaComponent } from './work-area/work-area.component';

import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    WorkAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
   HttpClientModule
  ],
  providers: [AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
