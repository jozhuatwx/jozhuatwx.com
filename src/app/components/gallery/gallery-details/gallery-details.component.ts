import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpRequestService } from 'src/app/services/http-request/http-request.service';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics/google-analytics.service';
import { MetaTagsService } from 'src/app/services/meta-tags/meta-tags.service';

import { GalleryData } from 'src/app/models/gallery-data.model';
import { MetaTags } from 'src/app/models/meta-tags.model';
import { GtagExceptionEvent } from 'src/app/models/google-analytics/event/gtag-exception-event.model';

@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.scss']
})
export class GalleryDetailsComponent implements OnInit {

  loading = true;
  data: GalleryData | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpRequestService: HttpRequestService,
    private googleAnalyticsService: GoogleAnalyticsService,
    private metaTagsService: MetaTagsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe({
        next: (params) => {
          this.httpRequestService.getData<GalleryData[]>('developer/blog-data.json')
            .subscribe({
              next: (projects) => {
                this.data = projects.find(project => project.id == params['id']);
                if (this.data) {
                  this.metaTagsService.update(new MetaTags({
                    title: this.data.title ? `${this.data.title} | Jozhua Ten` : undefined,
                    description: this.data.description,
                    image: this.data.heroImage?.src ? `${window.location.origin}/${this.data.heroImage?.src}` : undefined,
                    imageHeight: this.data.heroImage?.height,
                    imageWidth: this.data.heroImage?.width,
                    type: 'article'
                  }));
                } else {
                  this.router.navigateByUrl('/developer');
                }
                this.loading = false;
              },
              error: (error: Error) => {
                this.loading = false;
                this.googleAnalyticsService.event(new GtagExceptionEvent({ description: error.message, fatal: true }));
              }
            });
        }
      });
  }
}
