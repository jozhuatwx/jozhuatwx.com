export class MetaTags {
  themeColour: string;
  keywords: string;
  robots: string;
  // open graph
  title: string;
  description: string;
  url: string;
  image: string;
  imageHeight: string;
  imageWidth: string;
  type: string;
  siteName: string;
  // twitter card
  card: string;
  site: string;
  creator: string;

  constructor({
    themeColour = '#000000',
    keywords = 'developer, portfolio, technology',
    robots = 'index',
    title = 'Jozhua Ten',
    description = 'Jozhua Ten\'s online playground.',
    url = window.location.href,
    image = 'https://jozhuatwx.com/assets/favicon/android-chrome-512x512.png',
    imageHeight = 512,
    imageWidth = 512,
    type = 'website',
    siteName = 'Jozhua Ten',
    card = 'summary_large_image',
    site = '@jozhuatwx',
    creator = '@jozhuatwx'
  }) {
    this.themeColour = themeColour;
    this.keywords = keywords;
    this.robots = robots;
    this.title = title;
    this.description = description;
    this.url = url;
    this.image = image,
    this.imageHeight = imageHeight.toString();
    this.imageWidth = imageWidth.toString();
    this.type = type;
    this.siteName = siteName;
    this.card = card;
    this.site = site;
    this.creator = creator;
  }
}
