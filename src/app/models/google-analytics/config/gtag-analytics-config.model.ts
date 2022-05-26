import { environment } from 'src/environments/environment';

import { GtagConfig } from './gtag-config.model';
import { GtagConfigObject } from './config-object/gtag-config-object.model';

export class GtagAnalyticsConfig implements GtagConfig {

  targetId = environment.gaMeasurementId;
  configObject: GtagConfigObject;

  constructor(configObject: GtagConfigObject) {
    this.configObject = configObject;
  }
}
