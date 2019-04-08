import { Sponsor, SponsorType } from './types'

interface From2018 {
  YouTubePlaylistUrl: string
  YouTubeKeynoteEmbedUrl: string
  YouTubeLunchnoteEmbedUrl: string
  YouTubeLocknoteEmbedUrl: string
  FlickrAlbumUrl: string
  HandbookUrl: string
  Sponsors: Sponsor[]
}

const From2018: From2018 = {
  YouTubePlaylistUrl: 'https://www.youtube.com/watch?v=A02tSBP7CCw&list=PLkLJSte3oodSP0RvXqylgI16BO5eojS19',
  // tslint:disable-next-line:object-literal-sort-keys
  YouTubeKeynoteEmbedUrl: null,
  YouTubeLunchnoteEmbedUrl: null,
  YouTubeLocknoteEmbedUrl: null,
  FlickrAlbumUrl: null,
  HandbookUrl: null,
  Sponsors: [
    // Platinum
    {
      imageUrl: '/static/images/sponsors/liberty.png',
      name: 'Liberty',
      type: SponsorType.Platinum,
      url: 'https://www.liberty.com.au/',
    },
    // Gold
    {
      imageUrl: '/static/images/sponsors/compass.png',
      name: 'Compass',
      type: SponsorType.Gold,
      url: 'https://www.compass.education/',
    },
    {
      imageUrl: '/static/images/sponsors/kiandrait.png',
      name: 'Kiandra It',
      type: SponsorType.Gold,
      url: 'https://kiandra.com.au/',
    },
    {
      imageUrl: '/static/images/sponsors/livehire.png',
      name: 'LiveHire',
      type: SponsorType.Gold,
      url: 'https://www.livehire.com/',
    },
    {
      imageUrl: '/static/images/sponsors/microsoft.png',
      name: 'Microsoft',
      type: SponsorType.Gold,
      url: 'https://www.microsoft.com/',
    },
    {
      imageUrl: '/static/images/sponsors/nintex.png',
      name: 'Nintex',
      type: SponsorType.Gold,
      url: 'https://www.nintex.com',
    },
    {
      imageUrl: '/static/images/sponsors/readify.png',
      name: 'Readify ',
      type: SponsorType.Gold,
      url: 'https://readify.net/',
    },
    {
      imageUrl: '/static/images/sponsors/square.png',
      name: 'Square',
      type: SponsorType.Gold,
      url: 'https://squareup.com/au',
    },
    {
      imageUrl: '/static/images/sponsors/starrez.png',
      name: 'StarRez',
      type: SponsorType.Gold,
      url: 'https://www.starrez.com/',
    },
    {
      imageUrl: '/static/images/sponsors/twilio.png',
      name: 'Twilio',
      type: SponsorType.Gold,
      url: 'https://www.twilio.com/',
    },
    // Silver
    {
      imageUrl: '/static/images/sponsors/ndc-sydney.png',
      name: 'NDC Sydney',
      type: SponsorType.Silver,
      url: 'http://ndcsydney.com/',
    },
    {
      imageUrl: '/static/images/sponsors/progress-telerik.png',
      name: 'Progress Telerik',
      type: SponsorType.Silver,
      url: 'https://www.progress.com/',
    },
    // Community
    {
      imageUrl: '/static/images/sponsors/GGDMelb.png',
      name: 'Girl Geek Dinners Melbourne',
      type: SponsorType.Community,
      url: 'https://www.meetup.com/en-AU/Girl-Geek-Dinners-Melbourne/',
    },
    {
      imageUrl: '/static/images/sponsors/juniordev.png',
      name: 'JuniorDev',
      type: SponsorType.Community,
      url: 'http://juniordev.io/',
    },
    // Services
    {
      imageUrl: '/static/images/sponsors/flexrule.png',
      name: 'FlexRule',
      serviceProvided: 'Wifi',
      type: SponsorType.Service,
      url: 'http://www.flexrule.com',
    },
    {
      imageUrl: '/static/images/sponsors/mexia.png',
      name: 'Mexia',
      serviceProvided: 'Childcare',
      type: SponsorType.Service,
      url: 'https://www.mexia.com.au',
    },
    {
      imageUrl: '/static/images/sponsors/devexpress.png',
      name: 'DevExpress',
      serviceProvided: 'Cofee Cart',
      type: SponsorType.Service,
      url: 'https://www.devexpress.com',
    },
    // Standard
  ],
}

export default From2018
