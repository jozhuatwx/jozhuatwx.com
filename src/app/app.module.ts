import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LoadModule } from 'src/app/components/load/load.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutletAnimationPagePipe } from './pipes/router-outlet-animation-page/router-outlet-animation-page.pipe';

import { CacheInterceptorService } from './services/cache-interceptor/cache-interceptor.service';
import { GoogleAnalyticsService } from './services/google-analytics/google-analytics.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RouterOutletAnimationPagePipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LoadModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptorService, multi: true },
    GoogleAnalyticsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
