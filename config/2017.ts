import { Sponsor, SponsorType } from './types'

interface From2017 {
  YouTubePlaylistUrl: string
  YouTubeKeynoteEmbedUrl: string
  FlickrAlbumUrl: string
  Sponsors: Sponsor[]
}

const From2017: From2017 = {
  YouTubePlaylistUrl: null, // TODO
  // tslint:disable-next-line:object-literal-sort-keys
  YouTubeKeynoteEmbedUrl: null, // TODO
  FlickrAlbumUrl: null, // TODO
  Sponsors: [
    // Platinum
    {
      imageUrl: '/static/images/sponsors/2017/readify.png',
      name: 'Readify',
      type: SponsorType.Platinum,
      url: 'https://readify.net/'
    },
    // Gold
    {
      imageUrl: '/static/images/sponsors/2017/a-cloud-guru.png',
      name: 'A Cloud Guru',
      type: SponsorType.Gold,
      url: 'https://acloud.guru/',
    },
    {
      imageUrl: '/static/images/sponsors/2017/auth0.png',
      name: 'Auth0',
      type: SponsorType.Gold,
      url: 'https://auth0.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2017/buzzconf.png',
      name: 'BuzzConf',
      type: SponsorType.Gold,
      url: 'https://buzzconf.io',
    },
    {
      imageUrl: '/static/images/sponsors/2017/devexpress.png',
      name: 'DevExpress',
      serviceProvided: 'Developer Recharge (Coffee)',
      type: SponsorType.Gold,
      url: 'https://www.devexpress.com',
    },
    {
      imageUrl: '/static/images/sponsors/2017/kiandrait.png',
      name: 'Kiandra It',
      type: SponsorType.Gold,
      url: 'https://kiandra.com.au/',
    },
    {
      imageUrl: '/static/images/sponsors/2017/microsoft.png',
      name: 'Microsoft',
      type: SponsorType.Gold,
      url: 'https://www.microsoft.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2017/myob.png',
      name: 'myob',
      type: SponsorType.Gold,
      url: 'https://www.myob.com/au',
    },
    {
      imageUrl: '/static/images/sponsors/2017/nintex.png',
      name: 'Nintex',
      type: SponsorType.Gold,
      url: 'https://www.nintex.com/',
    },
    // Silver
    {
      imageUrl: '/static/images/sponsors/2017/car-sales.png',
      name: 'Carsales',
      type: SponsorType.Silver,
      url: 'https://www.carsales.com.au',
    },
    {
      imageUrl: '/static/images/sponsors/2017/ndc-sydney.png',
      name: 'NDC Sydney',
      type: SponsorType.Silver,
      url: 'https://ndcsydney.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2017/octopus-deploy.png',
      name: 'Octopus Deploy',
      type: SponsorType.Silver,
      url: 'https://octopus.com',
    },
    {
      imageUrl: '/static/images/sponsors/2017/progress.png',
      name: 'Progress',
      type: SponsorType.Silver,
      url: 'https://www.progress.com/',
    },
    // Community
    {
      imageUrl: '/static/images/sponsors/2017/juniordev.png',
      name: 'JuniorDev',
      type: SponsorType.Community,
      url: 'https://juniordev.io/',
    }
    // Services
  ],
}

export default From2017
