import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MetaTags } from 'src/app/models/meta-tags.model';

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService {

  constructor(private title: Title) { }

  update(linkPreview: MetaTags): void {
    this.title.setTitle(linkPreview.title);
    const head = document.head;
    head.querySelector('[name="theme-color"]')?.setAttribute('content', linkPreview.themeColour);
    head.querySelector('[name="description"]')?.setAttribute('content', linkPreview.description);
    head.querySelector('[name="keywords"]')?.setAttribute('content', linkPreview.keywords);
    // open protocol
    head.querySelector('[name="robots"]')?.setAttribute('content', linkPreview.robots);
    head.querySelector('[property="og:title"]')?.setAttribute('content', linkPreview.title);
    head.querySelector('[property="og:description"]')?.setAttribute('content', linkPreview.description);
    head.querySelector('[property="og:url"]')?.setAttribute('content', linkPreview.url);
    head.querySelector('[property="og:image"]')?.setAttribute('content', linkPreview.image);
    head.querySelector('[property="og:image:height"]')?.setAttribute('content', linkPreview.imageHeight);
    head.querySelector('[property="og:image:width"]')?.setAttribute('content', linkPreview.imageWidth);
    head.querySelector('[property="og:type"]')?.setAttribute('content', linkPreview.type);
    head.querySelector('[property="og:site_name"]')?.setAttribute('content', linkPreview.siteName);
    // twitter card
    head.querySelector('[name="twitter:card"]')?.setAttribute('content', linkPreview.card);
    head.querySelector('[name="twitter:site"]')?.setAttribute('content', linkPreview.site);
    head.querySelector('[name="twitter:creator"]')?.setAttribute('content', linkPreview.creator);
  }
}
