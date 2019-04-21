import { Sponsor, SponsorType } from './types'

interface From2010 {
  YouTubePlaylistUrl: string
  YouTubeKeynoteEmbedUrl: string
  FlickrAlbumUrl: string
  Sponsors: Sponsor[]
}

const From2010: From2010 = {
  YouTubePlaylistUrl: null, // TODO
  // tslint:disable-next-line:object-literal-sort-keys
  YouTubeKeynoteEmbedUrl: null, // TODO
  FlickrAlbumUrl: null, // TODO
  Sponsors: [
    // Gold
    {
      imageUrl: '/static/images/sponsors/2010/nab.png',
      name: 'NAB',
      type: SponsorType.Gold,
      url: 'https://nab.com.au/',
    },
    {
      imageUrl: '/static/images/sponsors/2010/readify.png',
      name: 'Readify',
      type: SponsorType.Gold,
      url: 'https://readify.net/',
    },
  ]
}

export default From2010
