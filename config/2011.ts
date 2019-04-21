import { Sponsor, SponsorType } from './types'

interface From2011 {
  YouTubePlaylistUrl: string
  YouTubeKeynoteEmbedUrl: string
  FlickrAlbumUrl: string
  Sponsors: Sponsor[]
}

const From2011: From2011 = {
  YouTubePlaylistUrl: null, // TODO
  // tslint:disable-next-line:object-literal-sort-keys
  YouTubeKeynoteEmbedUrl: null, // TODO
  FlickrAlbumUrl: null, // TODO
  Sponsors: [
    // Gold
    {
      imageUrl: '/static/images/sponsors/2011/readify.png',
      name: 'Readify',
      type: SponsorType.Gold,
      url: 'https://readify.net/',
    },
    {
      imageUrl: '/static/images/sponsors/2011/telerik.png',
      name: 'Telerik',
      type: SponsorType.Gold,
      url: 'http://telerik.com/'
    },
    // Silver
    {
      imageUrl: '/static/images/sponsors/2011/myob.png',
      name: 'MYOB',
      type: SponsorType.Silver,
      url: 'http://myob.com.au/',
    },
    {
      imageUrl: '/static/images/sponsors/2011/expanz.png',
      name: 'Expanz',
      type: SponsorType.Silver,
      url: 'http://www.expanz.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2011/falafel.png',
      name: 'Falafel',
      type: SponsorType.Silver,
      url: 'http://www.falafel.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2011/yow.png',
      name: 'YOW',
      type: SponsorType.Silver,
      url: 'http://www.yowconference.com.au/general/yownights.html',
    },
    // Standard
    {
      imageUrl: '/static/images/sponsors/2011/apress.png',
      name: 'Apress',
      type: SponsorType.Standard,
      url: 'http://apress.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2011/jetbrains.png',
      name: 'Jetbrains',
      type: SponsorType.Standard,
      url: 'http://www.jetbrains.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2011/oreilly.png',
      name: 'O\'Reilley',
      type: SponsorType.Standard,
      url: 'http://oreilly.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2011/pluralsight.png',
      name: 'Pluralsight',
      type: SponsorType.Standard,
      url: 'http://www.pluralsight-training.net/',
    }
  ]
}

export default From2011