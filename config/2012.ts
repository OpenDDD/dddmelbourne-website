import { Sponsor, SponsorType } from './types'

interface From2012 {
  YouTubePlaylistUrl: string
  YouTubeKeynoteEmbedUrl: string
  FlickrAlbumUrl: string
  Sponsors: Sponsor[]
}

const From2012: From2012 = {
  YouTubePlaylistUrl: null, // TODO
  // tslint:disable-next-line:object-literal-sort-keys
  YouTubeKeynoteEmbedUrl: null, // TODO
  FlickrAlbumUrl: null, // TODO
  Sponsors: [
    // Gold
    {
      id: '',
      imageUrl: '/static/images/sponsors/2012/apress.png',
      name: 'Apress',
      type: SponsorType.Gold,
      url: 'http://apress.com/',
    },
    {
      id: '',
      imageUrl: '/static/images/sponsors/2012/infragistics.png',
      name: 'Infragistics',
      type: SponsorType.Gold,
      url: 'https://infragistics.com/',
    },
    {
      id: '',
      imageUrl: '/static/images/sponsors/2012/mydigitalstructure.png',
      name: 'My Digital Structure',
      type: SponsorType.Gold,
      url: 'http://mydigitalstructure.com/',
    },
    {
      id: '',
      imageUrl: '/static/images/sponsors/2012/readify.png',
      name: 'Readify',
      type: SponsorType.Gold,
      url: 'https://readify.net/',
    },
    {
      id: '',
      imageUrl: '/static/images/sponsors/2012/jetbrains.png',
      name: 'Jetbrains',
      type: SponsorType.Gold,
      url: 'http://jetbrains.com/',
    },
    {
      id: '',
      imageUrl: '/static/images/sponsors/2012/telerik.png',
      name: 'Telerik',
      type: SponsorType.Gold,
      url: 'http://telerik.com/'
    }
  ]
}

export default From2012
