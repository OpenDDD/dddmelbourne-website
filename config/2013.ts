import { Sponsor, SponsorType } from './types'

interface From2013 {
  YouTubePlaylistUrl: string
  YouTubeKeynoteEmbedUrl: string
  FlickrAlbumUrl: string
  Sponsors: Sponsor[]
}

const From2013: From2013 = {
  YouTubePlaylistUrl: null, // TODO
  // tslint:disable-next-line:object-literal-sort-keys
  YouTubeKeynoteEmbedUrl: null, // TODO
  FlickrAlbumUrl: null, // TODO
  Sponsors: [
    // Gold
    {
      imageUrl: '/static/images/sponsors/2013/99designs.png',
      name: '99designs',
      type: SponsorType.Gold,
      url: 'https://99designs.com.au',
    },
    {
      imageUrl: '/static/images/sponsors/2013/kiandra.png',
      name: 'Kiandra IT',
      type: SponsorType.Gold,
      url: 'https://kiandra.com.au/',
    },
    {
      imageUrl: '/static/images/sponsors/2013/infragistics.png',
      name: 'Infragistics',
      type: SponsorType.Gold,
      url: 'https://infragistics.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2013/readify.png',
      name: 'Readify',
      type: SponsorType.Gold,
      url: 'https://readify.net/',
    },
    // Standard
    {
      imageUrl: '/static/images/sponsors/2013/aspose.png',
      name: 'Aspose',
      type: SponsorType.Standard,
      url: 'http://aspose.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2013/appfail.png',
      name: 'AppFail',
      type: SponsorType.Standard,
      url: 'http://appfail.net/',
    },
    {
      imageUrl: '/static/images/sponsors/2013/flexrule.png',
      name: 'FlexRule',
      type: SponsorType.Standard,
      url: 'http://www.pliantframework.com.au/',
    },
    {
      imageUrl: '/static/images/sponsors/2013/innerworkings.png',
      name: 'InnerWorkings',
      type: SponsorType.Standard,
      url: 'http://innerworkings.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2013/jetbrains.png',
      name: 'Jetbrains',
      type: SponsorType.Standard,
      url: 'http://jetbrains.com/',
    },
    {
      imageUrl: '/static/images/sponsors/2013/oreilly.png',
      name: 'O\'Reilly',
      type: SponsorType.Standard,
      url: 'http://oreilly.net/'
    },
    {
      imageUrl: '/static/images/sponsors/2013/pluralsight.png',
      name: 'Pluralsight',
      type: SponsorType.Standard,
      url: 'http://pluralsight.com/'
    },
    {
      imageUrl: '/static/images/sponsors/2013/redgate.png',
      name: 'Redgate',
      type: SponsorType.Standard,
      url: 'http://red-gate.com/'
    },
    {
      imageUrl: '/static/images/sponsors/2013/tekpub.png',
      name: 'Tekpub',
      type: SponsorType.Standard,
      url: 'http://tekpub.com/'
    },
    {
      imageUrl: '/static/images/sponsors/2013/telerik.png',
      name: 'Telerik',
      type: SponsorType.Standard,
      url: 'http://telerik.com/'
    }
  ]
}

export default From2013
