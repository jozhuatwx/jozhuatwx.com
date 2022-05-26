import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  isMobile = false;
  isTablet = false;
  isDesktop = false;
  isWideDesktop = false;
  isDarkTheme = false;

  update(): void {
    this.themed();
    this.resized();
  }

  themed(): void {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.isDarkTheme = true;
    } else {
      this.isDarkTheme = false;
    }
  }

  resized(): void {
    this.resetResized();

    const width = window.innerWidth;
    if (width < 600) {
      this.isMobile = true;
    } else if (width < 1020) {
      this.isTablet = true;
    } else {
      this.isDesktop = true;
      if (width >= 1476) {
        this.isWideDesktop = true;
      }
    }
  }

  private resetResized(): void {
    this.isMobile = false;
    this.isTablet = false;
    this.isDesktop = false;
    this.isWideDesktop = false;
  }
}
