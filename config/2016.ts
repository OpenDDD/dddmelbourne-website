import { Sponsor, SponsorType } from './types'

interface From2016 {
  YouTubePlaylistUrl: string
  YouTubeKeynoteEmbedUrl: string
  FlickrAlbumUrl: string
  Sponsors: Sponsor[]
}

const From2016: From2016 = {
  YouTubePlaylistUrl: null, // TODO
  // tslint:disable-next-line:object-literal-sort-keys
  YouTubeKeynoteEmbedUrl: null, // TODO
  FlickrAlbumUrl: null, // TODO
  Sponsors: [
    // Platinum
    {
      imageUrl: '/static/images/sponsors/2018/liberty.png',
      name: 'Liberty',
      type: SponsorType.Platinum,
      url: 'https://www.liberty.com.au/',
    },
    // Gold
    {
      imageUrl: '/static/images/sponsors/2016/gooroo.png',
      name: 'gooroo',
      type: SponsorType.Gold,
      url: 'https://gooroo.io/',
    },
    {
      imageUrl: '/static/images/sponsors/2016/microsoft.png',
      name: 'Microsoft',
      type: SponsorType.Gold,
      url: 'https://www.microsoft.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2016/ndc-sydney.png',
      name: 'NDC Sydney',
      type: SponsorType.Gold,
      url: 'http://ndcsydney.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2016/nintex.png',
      name: 'Nintex',
      type: SponsorType.Gold,
      url: 'https://www.nintex.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2016/pageup.png',
      name: 'PageUp',
      type: SponsorType.Gold,
      url: 'https://pageuppeople.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2016/progress.png',
      name: 'Progress',
      type: SponsorType.Silver,
      url: 'https://www.progress.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2016/readify.png',
      name: 'Readify',
      type: SponsorType.Gold,
      url: 'https://readify.net/',
    },
    // Silver
    {
      imageUrl: '/static/images/sponsors/2016/octopusdeploy.png',
      name: 'Octopus Deploy',
      type: SponsorType.Silver,
      url: 'https://octopus.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2016/seek.png',
      name: 'Seek',
      type: SponsorType.Silver,
      url: 'https://seek.com.au/',
    },
    {
      imageUrl: '/static/images/sponsors/2016/webjet.png',
      name: 'Webjet',
      type: SponsorType.Silver,
      url: 'https://webjet.com.au/',
    },
    // Services
    {
      imageUrl: '/static/images/sponsors/2016/pan.png',
      name: 'Pan Software',
      serviceProvided: 'Developer Recharge (Coffee)',
      type: SponsorType.Service,
      url: 'http://www.pansoftware.com.au/',
    },
    //Standard
    {
      imageUrl: '/static/images/sponsors/2016/aspose.png',
      name: 'Aspose',
      type: SponsorType.Standard,
      url: 'https://www.aspose.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2016/xamconsulting.png',
      name: 'Xam Consulting',
      type: SponsorType.Standard,
      url: 'https://xam-consulting.com/'
    },
    {
      imageUrl: '/static/images/sponsors/2016/pluralsight.png',
      name: 'Pluralsight',
      type: SponsorType.Standard,
      url: 'https://www.pluralsight.com/'
    }
  ]
}

export default From2016
