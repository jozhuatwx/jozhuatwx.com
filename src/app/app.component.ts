import { Component, HostListener } from '@angular/core';
import { NavigationEnd, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent } from '@angular/router';

import { environment } from 'src/environments/environment';

import { PageAnimation } from './animations/page.animation';

import { GoogleAnalyticsService } from './services/google-analytics/google-analytics.service';
import { SettingsService } from 'src/app/services/settings/settings.service';
import { GtagAnalyticsConfig } from './models/google-analytics/config/gtag-analytics-config.model';
import { DeviceService } from 'src/app/services/device/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [PageAnimation]
})
export class AppComponent {

  loading = false;

  constructor(
    private router: Router,
    private googleAnalyticsService: GoogleAnalyticsService,
    private settingsService: SettingsService,
    public deviceService: DeviceService
  ) {
    if (environment.production) {
      this.router.events.subscribe({
        next: (event) => {
          if (event instanceof NavigationEnd) {
            this.googleAnalyticsService.config(new GtagAnalyticsConfig({ page_path: event.urlAfterRedirects }));
          }
        }
      });
    }

    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof RouteConfigLoadStart) {
          this.loading = true;
        } else if (event instanceof RouteConfigLoadEnd) {
          this.loading = false;
        }
      }
    });

    this.deviceService.update();
    this.settingsService.update();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      this.deviceService.themed();
      this.settingsService.updateTheme();
    });
  }

  @HostListener('window:resize')
  onResize(): void {
    this.deviceService.resized();
  }
}
