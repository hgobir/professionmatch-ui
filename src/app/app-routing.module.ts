import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { InstituteComponent } from './components/institute/institute.component';
import { BushComponent } from './components/bush/bush.component';
import { MatchComponent } from './components/match/match.component';
import { DangoteComponent } from './components/dangote/dangote.component';
import { GatesComponent } from './components/gates/gates.component';
import { CooksComponent } from './components/cooks/cooks.component';
import { TsujiComponent } from './components/tsuji/tsuji.component';

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
    path: 'dangote',
    component: DangoteComponent
  },
    {
    path: 'gates',
    component: GatesComponent
  },
  {
    path: 'cooks',
    component: CooksComponent
  },
  {
    path: 'tsuji',
    component: TsujiComponent
  },
  {
    path: 'institute',
    component: InstituteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
