import { GtagConfigObject } from './config-object/gtag-config-object.model';

export interface GtagConfig {
  /**
   * An identifier that uniquely identifies the target for hits, such as a Google Analytics property or a Google Ads account.
   */
  targetId: string;

  /**
   * The config object that will be sent to Google Analytics.
   */
  configObject: GtagConfigObject;
}
