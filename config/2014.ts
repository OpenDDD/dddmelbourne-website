import { Sponsor, SponsorType } from './types'

interface From2014 {
  YouTubePlaylistUrl: string
  YouTubeKeynoteEmbedUrl: string
  FlickrAlbumUrl: string
  Sponsors: Sponsor[]
}

const From2014: From2014 = {
  YouTubePlaylistUrl: null, // TODO
  // tslint:disable-next-line:object-literal-sort-keys
  YouTubeKeynoteEmbedUrl: null, // TODO
  FlickrAlbumUrl: null, // TODO
  Sponsors: [
    // Gold
    {
      imageUrl: '/static/images/sponsors/2014/devexpress.png',
      name: 'DevExpress',
      type: SponsorType.Gold,
      url: 'https://www.devexpress.com',
    },
    {
      imageUrl: '/static/images/sponsors/2014/kiandra.png',
      name: 'Kiandra IT',
      type: SponsorType.Gold,
      url: 'https://kiandra.com.au/',
    },
    {
      imageUrl: '/static/images/sponsors/2014/msgooroo.png',
      name: 'msgooroo',
      type: SponsorType.Gold,
      url: 'https://msgooroo.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2014/obs.png',
      name: 'OBS',
      type: SponsorType.Gold,
      url: 'http://www.obs.com.au/',
    },
    {
      imageUrl: '/static/images/sponsors/2014/xero.png',
      name: 'Xero',
      type: SponsorType.Gold,
      url: 'https://www.xero.com/au/',
    },
    // Silver
    {
      imageUrl: '/static/images/sponsors/2014/aspose.png',
      name: 'Aspose',
      type: SponsorType.Silver,
      url: 'https://www.aspose.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2014/NICTA.png',
      name: 'NICTA',
      type: SponsorType.Silver,
      url: 'https://nicta.com.au/',
    },
    {
      imageUrl: '/static/images/sponsors/2014/readify.png',
      name: 'Readify',
      type: SponsorType.Silver,
      url: 'https://readify.net/',
    },
    {
      imageUrl: '/static/images/sponsors/2014/ssw.png',
      name: 'SSW',
      type: SponsorType.Silver,
      url: 'https://ssw.com.au/',
    },
    //Standard
    {
      imageUrl: '/static/images/sponsors/2014/flexrule.png',
      name: 'FlexRule',
      type: SponsorType.Standard,
      url: 'http://www.flexrule.com',
    },
    {
      imageUrl: '/static/images/sponsors/2014/oreilly.png',
      name: 'O\'Reilly',
      type: SponsorType.Standard,
      url: 'https://www.oreilly.com/'
    },
    {
      imageUrl: '/static/images/sponsors/2014/webdirection-south.png',
      name: 'Web Directions',
      type: SponsorType.Standard,
      url: 'https://www.webdirections.org/'
    }
  ]
}

export default From2014
