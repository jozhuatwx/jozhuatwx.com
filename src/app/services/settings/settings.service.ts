import { Injectable } from '@angular/core';

import { DeviceService } from 'src/app/services/device/device.service';

import { Settings } from 'src/app/models/settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings;

  constructor(
    private deviceService: DeviceService
  ) {
    const settings = window.localStorage.getItem('settings');
    if (settings) {
      this.settings = JSON.parse(settings);
    } else {
      this.settings = {
        'theme': 'device',
        'letterSpacing': '0',
        'wordSpacing': '0'
      }
      this.save();
    }
  }

  update(): void {
    this.updateTheme();
    this.updateLetterSpacing();
    this.updateWordSpacing();
  }

  updateTheme(): void {
    let theme = this.settings.theme;
    if (!theme || theme === 'device') {
      theme = this.deviceService.isDarkTheme ? 'dark' : 'light';
    }
    document.documentElement.style.setProperty('color-scheme', theme);

    const classes = document.body.classList;
    classes.remove('light', 'dark');
    classes.add(theme);
  }

  updateLetterSpacing(): void {
    this.settings.letterSpacing ??= '0';
    document.documentElement.style.setProperty('--letter-spacing', `${this.settings.letterSpacing}px`);
  }

  updateWordSpacing(): void {
    this.settings.wordSpacing ??= '0';
    document.documentElement.style.setProperty('--word-spacing', `${this.settings.wordSpacing}px`);
  }

  save(): void {
    window.localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  clear(): void {
    localStorage.removeItem('settings');
  }
}
