import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { BikeService } from './services/bike.service';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { InstituteComponent } from './components/institute/institute.component';
import { BushComponent } from './components/bush/bush.component';
import { TsujiComponent } from './components/tsuji/tsuji.component';
import { DangoteComponent } from './components/dangote/dangote.component';
import { CooksComponent } from './components/cooks/cooks.component';
import { GatesComponent } from './components/gates/gates.component';
import { MatchComponent } from './components/match/match.component';
import { MatchService } from './services/match.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    InstituteComponent,
    BushComponent,
    TsujiComponent,
    DangoteComponent,
    CooksComponent,
    GatesComponent,
    MatchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BikeService, AuthService, UserService, MatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
