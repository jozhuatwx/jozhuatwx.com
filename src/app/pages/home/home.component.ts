import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { HttpRequestService } from 'src/app/services/http-request/http-request.service';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics/google-analytics.service';
import { MetaTagsService } from 'src/app/services/meta-tags/meta-tags.service';

import { HomeData } from 'src/app/models/home-data.model';
import { SocialLink } from 'src/app/models/social-link.model';
import { MetaTags } from 'src/app/models/meta-tags.model';
import { GtagExceptionEvent } from 'src/app/models/google-analytics/event/gtag-exception-event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = true;
  home: HomeData | undefined;
  links: SocialLink[] = [];

  constructor(
    private httpRequestService: HttpRequestService,
    private googleAnalyticsService: GoogleAnalyticsService,
    private metaTagsService: MetaTagsService,
  ) {
    this.metaTagsService.update(new MetaTags({}));
  }

  ngOnInit(): void {
    forkJoin([
      this.httpRequestService.getData<HomeData>('home-data.json'),
      this.httpRequestService.getData<SocialLink[]>('social-links.json')
    ]).subscribe({
      next: ([home, links]) => {
        this.home = home;
        this.links = links;
        this.loading = false;
      },
      error: (error: Error) => {
        this.loading = false;
        this.googleAnalyticsService.event(new GtagExceptionEvent({ description: error.message }));
      }
    })
  }
}
