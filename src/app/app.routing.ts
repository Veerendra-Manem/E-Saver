import { Routes } from '@angular/router';

import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryListComponent } from './country-list/country-list.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { PledgeDetailComponent } from './pledge-detail/pledge-detail.component';
import { PledgeMaintComponent } from './pledge-maint/pledge-maint.component';
import { MetricsMeterComponent } from './metrics-meter/metrics-meter.component';
import { SettingsComponent } from './settings/settings.component';
import { SignInComponent } from '../fw/users/sign-in/sign-in.component';
import { RegisterUserComponent } from '../fw/users/register-user/register-user.component';
import { AuthGuard } from './services/auth-guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GroupTrackerComponent } from './group-tracker/group-tracker.component';
import { PersonalTrackerComponent } from './personal-tracker/personal-tracker.component';

export const appRoutes: Routes = [  
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard],
    children: [
      { path: '', canActivateChild: [AuthGuard],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'user-profile', component: UserProfileComponent },
          { path: 'group-tracker', component: GroupTrackerComponent },
          { path: 'personal-tracker', component: PersonalTrackerComponent },
          { path: 'country-list/:count', component: CountryListComponent },
          { path: 'activity-list/:count', component: ActivityListComponent },
          { path: 'country-detail/:id/:operation', component: CountryDetailComponent },
          { path: 'pledge-detail/:id/:operation', component: PledgeDetailComponent },
          { path: 'country-maint', component: CountryMaintComponent },
          { path: 'pledge-maint', component: PledgeMaintComponent },
          { path: 'metrics-meter', component: MetricsMeterComponent },
          { path: 'settings', component: SettingsComponent },
        ] }
    ] },
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }
];