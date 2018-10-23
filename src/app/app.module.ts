import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from './app.routing';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from './services/user.service';
import { UserApi } from '../fw/users/user-api';
import { AuthGuard } from './services/auth-guard.service';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { AppDataService } from './services/app-data.service';
import { AuthInterceptorService } from './services/authInterceptor.service'
import { UserPanelComponent } from './panels/user-panel/user-panel.component';
import { ImagePanelComponent } from './panels/image-panel/image-panel.component';
import { ActivityPanelComponent } from './panels/activity-panel/activity-panel.component';
import { MetricsMeterComponent } from './metrics-meter/metrics-meter.component';
import { PledgeMaintComponent } from './pledge-maint/pledge-maint.component';
import { PledgeDetailComponent } from './pledge-detail/pledge-detail.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { GroupTrackerComponent } from './group-tracker/group-tracker.component';
import { PersonalTrackerComponent } from './personal-tracker/personal-tracker.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,        
    AuthenticatedUserComponent,    
    ImagePanelComponent,
    MetricsMeterComponent,
    ActivityPanelComponent,
    PledgeMaintComponent,
    PledgeDetailComponent,
    ActivityListComponent,
    GroupTrackerComponent,
    PersonalTrackerComponent,
    UserProfileComponent,
    UserListComponent,
    UserPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService },
    AuthGuard,
    AppDataService,
    ApiService,
    AuthService, { 
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
