import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { InstituteComponent } from './components/institute/institute.component';
import { BushComponent } from './components/bush/bush.component';
import { MatchComponent } from './components/match/match.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'match',
    component: MatchComponent
  },
  {
    path: 'bush',
    component: BushComponent
  },
  {
    path: 'institute',
    component: InstituteComponent
  },
  {
    path: 'admin/view/:id',
    component: ViewRegistrationComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
