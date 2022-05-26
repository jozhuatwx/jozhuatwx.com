import { Gtag } from 'src/app/models/google-analytics/gtag.model';

export interface GtagConfigObject extends Gtag {
  /**
   * The title of the page.
   */
  page_title?: string;

  /**
  * The URL of the page.
  */
  page_location?: string;

  /**
  * The path to the page. If overridden, this value must start with a / character.
  */
  page_path?: string;

  /**
  * Whether or not a pageview should be sent.
  */
  send_page_view?: boolean;
}