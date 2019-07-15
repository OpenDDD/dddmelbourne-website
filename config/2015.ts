import { Sponsor, SponsorType } from './types'

interface From2015 {
  YouTubePlaylistUrl: string
  YouTubeKeynoteEmbedUrl: string
  FlickrAlbumUrl: string
  Sponsors: Sponsor[]
}

const From2015: From2015 = {
  YouTubePlaylistUrl: null, // TODO
  // tslint:disable-next-line:object-literal-sort-keys
  YouTubeKeynoteEmbedUrl: null, // TODO
  FlickrAlbumUrl: null, // TODO
  Sponsors: [
    // Platinum
    {
      id: '',
      imageUrl: '/static/images/sponsors/2015/ndc-sydney.png',
      name: 'NDC Sydney',
      type: SponsorType.Platinum,
      url: 'http://ndcsydney.com/',
    },
    // Gold
    {
      id: '',
      imageUrl: '/static/images/sponsors/2015/gooroo.png',
      name: 'gooroo',
      type: SponsorType.Gold,
      url: 'https://gooroo.io/',
    },
    {
      id: '',
      imageUrl: '/static/images/sponsors/2015/kiandra.png',
      name: 'Kiandra IT',
      type: SponsorType.Gold,
      url: 'https://kiandra.com.au/',
    },
    {
      id: '',
      imageUrl: '/static/images/sponsors/2015/nintex.png',
      name: 'Nintex',
      type: SponsorType.Gold,
      url: 'https://www.nintex.com/',
    },
    {
      id: '',
      imageUrl: '/static/images/sponsors/2015/pluralsight.png',
      name: 'Pluralsight',
      type: SponsorType.Gold,
      url: 'https://www.pluralsight.com/'
    },
    {
      id: '',
      imageUrl: '/static/images/sponsors/2015/readify.png',
      name: 'Readify',
      type: SponsorType.Gold,
      url: 'https://readify.net/',
    },
    {
      id: '',
      imageUrl: '/static/images/sponsors/2015/seek.png',
      name: 'Seek',
      type: SponsorType.Silver,
      url: 'https://seek.com.au/',
    },
    {
      id: '',
      imageUrl: '/static/images/sponsors/2015/seq.png',
      name: 'Seq',
      type: SponsorType.Gold,
      url: 'https://www.getseq.net/',
    },
    {
      id: '',
      imageUrl: '/static/images/sponsors/2015/xero.png',
      name: 'Xero',
      type: SponsorType.Gold,
      url: 'https://www.xero.com/au/',
    },
    // Silver
    {
      id: '',
      imageUrl: '/static/images/sponsors/2015/buzzconf.png',
      name: 'BuzzConf',
      type: SponsorType.Silver,
      url: 'https://buzzconf.io',
    },
    {
      id: '',
      imageUrl: '/static/images/sponsors/2015/compass.png',
      name: 'Compass',
      type: SponsorType.Silver,
      url: 'https://www.compass.education/',
    },
    {
      id: '',
      imageUrl: '/static/images/sponsors/2015/ssw.png',
      name: 'SSW',
      type: SponsorType.Silver,
      url: 'https://ssw.com.au/',
    },
    // Services
    {
      id: '',
      imageUrl: '/static/images/sponsors/2015/pan.png',
      name: 'Pan Software',
      serviceProvided: 'Developer Recharge (Coffee)',
      type: SponsorType.Service,
      url: 'http://www.pansoftware.com.au/',
    },
    {
      id: '',
      imageUrl: '/static/images/sponsors/2015/pageup.png',
      name: 'PageUp',
      serviceProvided: 'After Party',
      type: SponsorType.Service,
      url: 'https://pageuppeople.com/',
    },
    // Standard
    {
      id: '',
      imageUrl: '/static/images/sponsors/2015/aspose.png',
      name: 'Aspose',
      type: SponsorType.Standard,
      url: 'https://www.aspose.com/',
    },
    {
      id: '',
      imageUrl: '/static/images/sponsors/2015/jetbrains.png',
      name: 'Jetbrains',
      type: SponsorType.Standard,
      url: 'https://www.jetbrains.com/'
    }
  ]
}

export default From2015
