import { Component, Input } from '@angular/core';

import { SocialLink } from 'src/app/models/social-link.model';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent {

  @Input() links: SocialLink[] = [];
}
