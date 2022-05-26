import { Component, OnDestroy } from '@angular/core';

import { MetaTagsService } from 'src/app/services/meta-tags/meta-tags.service';
import { SettingsService } from 'src/app/services/settings/settings.service';

import { MetaTags } from 'src/app/models/meta-tags.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnDestroy {

  constructor(
    private metaTagsService: MetaTagsService,
    public settingsService: SettingsService
  ) {
    this.metaTagsService.update(new MetaTags({
      robots: 'noindex',
      title: 'Settings | Jozhua Ten',
      description: 'Configure aspects of the page, view privacy policy and more.'
    }));
  }

  ngOnDestroy(): void {
    this.settingsService.save();
  }
}
