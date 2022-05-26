import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { GtagConfig } from 'src/app/models/google-analytics/config/gtag-config.model';
import { GtagEvent } from 'src/app/models/google-analytics/event/gtag-event.model';

declare const gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() {
    if (environment.production) {
      const connectionScript = document.createElement('script');
      connectionScript.type = 'text/javascript';
      connectionScript.defer = true;
      connectionScript.src = `https://www.googletagmanager.com/gtag/js?id=${environment.gaMeasurementId}`;
      document.head.appendChild(connectionScript);

      const loadScript = document.createElement('script');
      loadScript.appendChild(
        document.createTextNode(
          `window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());`
        )
      );
      document.head.appendChild(loadScript);
    }
  }

  config(gtagConfig: GtagConfig): void {
    if (environment.production) {
      gtag('config', gtagConfig.targetId, gtagConfig.configObject);
    }
  }

  event(gtagEvent: GtagEvent): void {
    if (environment.production) {
      gtag('event', gtagEvent.action, gtagEvent.eventObject);
    }
  }
}
