import { Component, OnInit } from '@angular/core';

import { HttpRequestService } from 'src/app/services/http-request/http-request.service';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics/google-analytics.service';
import { MetaTagsService } from 'src/app/services/meta-tags/meta-tags.service';

import { GalleryData, GalleryDataEnum } from 'src/app/models/gallery-data.model';
import { MetaTags } from 'src/app/models/meta-tags.model';
import { GtagExceptionEvent } from 'src/app/models/google-analytics/event/gtag-exception-event.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  loading = true;
  projects: GalleryData[] = [];

  GalleryDataEnum = GalleryDataEnum;

  constructor(
    private httpRequestService: HttpRequestService,
    private googleAnalyticsService: GoogleAnalyticsService,
    private metaTagsService: MetaTagsService
  ) {
    this.metaTagsService.update(new MetaTags({
      title: 'Developer Projects | Jozhua Ten',
      description: 'List of Jozhua Ten\'s developer projects.'
    }));
  }

  ngOnInit(): void {
    this.httpRequestService.getData<GalleryData[]>('developer/projects-data.json')
      .subscribe({
        next: (projects) => {
          this.projects = projects;
          this.loading = false;
        },
        error: (error: Error) => {
          this.loading = false;
          this.googleAnalyticsService.event(new GtagExceptionEvent({ description: error.message, fatal: true }));
        }
      });
  }
}
