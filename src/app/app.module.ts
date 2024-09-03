import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { AuthGuardService } from './auth/shared/guard/auth.guard';
import { ForgotGuardService } from './auth/shared/guard/forgot.guard';
import { OtpGuardService } from './auth/shared/guard/otp.guard';
import { ProfileGuardService } from './auth/shared/guard/profile.guard';
import { LoaderComponent } from './shared/component/loader/loader.component';
import { CommonInterceptor } from './shared/interceptor/common.interceptor';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    DashboardModule,
    ClipboardModule,
    RouterModule.forRoot([]),
    NgbModule,
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: !isDevMode(),
    //   // Register the ServiceWorker as soon as the application is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
    // }),
  ],
  providers: [
    AuthGuardService, 
    ProfileGuardService,
    OtpGuardService,
    ForgotGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommonInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoaderComponent
  ]
})
export class AppModule { }
