import { Gtag } from 'src/app/models/google-analytics/gtag.model';

export interface GtagEventObject extends Gtag {
  /**
   * The category of the event.
   */
  category?: string;

  /**
   * The label of the event.
   */
  label?: string;

  /**
   * A non-negative integer that will appear as the event value.
   */
  value?: number;
}
