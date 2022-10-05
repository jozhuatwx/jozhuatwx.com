import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { HttpRequestService } from 'src/app/services/http-request/http-request.service';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics/google-analytics.service';
import { MetaTagsService } from 'src/app/services/meta-tags/meta-tags.service';
import { DeviceService } from 'src/app/services/device/device.service';

import { GalleryData, GalleryDataEnum } from 'src/app/models/gallery-data.model';
import { MetaTags } from 'src/app/models/meta-tags.model';
import { GtagExceptionEvent } from 'src/app/models/google-analytics/event/gtag-exception-event.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  loading = true;
  projects: GalleryData[] = [];
  blog: GalleryData[] = [];
  certificates: GalleryData[] = [];

  GalleryDataEnum = GalleryDataEnum;

  constructor(
    private httpRequestService: HttpRequestService,
    private googleAnalyticsService: GoogleAnalyticsService,
    private metaTagsService: MetaTagsService,
    public deviceService: DeviceService
  ) {
    this.metaTagsService.update(new MetaTags({
      title: 'Developer | Jozhua Ten',
      description: 'Jozhua Ten\'s journey as a developer.'
    }));
  }

  ngOnInit(): void {
    forkJoin([
      this.httpRequestService.getData<GalleryData[]>('developer/projects-data.json'),
      this.httpRequestService.getData<GalleryData[]>('developer/blog-data.json'),
      this.httpRequestService.getData<GalleryData[]>('developer/certificates-data.json')
    ]).subscribe({
      next: ([projects, blog, certificates]) => {
        this.projects = projects;
        this.blog = blog;
        this.certificates = certificates;
        this.loading = false;
      },
      error: (error: Error) => {
        this.loading = false;
        this.googleAnalyticsService.event(new GtagExceptionEvent({ description: error.message }));
      }
    })
  }
}
