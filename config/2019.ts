import { Sponsor, SponsorType } from './types'

interface From2019 {
  YouTubePlaylistUrl: string
  YouTubeKeynoteEmbedUrl: string
  FlickrAlbumUrl: string
  Sponsors: Sponsor[]
}

const From2019: From2019 = {
  YouTubePlaylistUrl: null, // TODO
  // tslint:disable-next-line:object-literal-sort-keys
  YouTubeKeynoteEmbedUrl: null, // TODO
  FlickrAlbumUrl: 'https://www.flickr.com/photos/184767946@N03/albums/72157711160474058',
  Sponsors: [
    // Diamond
    {
      id: 'microsoft',
      imageUrl: '/static/images/sponsors/2019/microsoft.png',
      name: 'Microsoft',
      type: SponsorType.Diamond,
      url: 'https://azure.microsoft.com/en-au/resources/join-the-azure-developer-community/?ocid=AID760699&wt.mc_id=DDDMelb',
    },
    // Platinum
    {
      id: 'liberty',
      imageUrl: '/static/images/sponsors/2019/liberty.png',
      name: 'Liberty',
      type: SponsorType.Platinum,
      url: 'https://www.liberty.com.au/',
    },
    {
      id: 'webjet',
      imageUrl: '/static/images/sponsors/2019/webjet.png',
      name: 'WebJet',
      type: SponsorType.Platinum,
      url: 'https://www.webjet.com.au/',
    },
    {
      id: 'github',
      imageUrl: '/static/images/sponsors/2019/GitHub_Logo.png',
      name: 'GitHub',
      type: SponsorType.AfterParty,
      url: 'https://www.github.com/',
    },
    // Gold
    {
      id: 'compass',
      imageUrl: '/static/images/sponsors/2019/Compass-Logo.png',
      name: 'Compass',
      type: SponsorType.Gold,
      url: 'https://www.compass.education/',
    },
    {
      id: 'readify',
      imageUrl: '/static/images/sponsors/2019/readify-kloud.png',
      name: 'Readify + Kloud',
      type: SponsorType.Gold,
      url: 'https://readify.net/',
    },
    {
      id: 'ovh',
      imageUrl: '/static/images/sponsors/2019/logo-ovh.png',
      name: 'OVH',
      type: SponsorType.Gold,
      url: 'https://www.ovh.com.au/',
    },
    {
      id: 'kiandra',
      imageUrl: '/static/images/sponsors/2019/kiandrait.png',
      name: 'Kiandra IT',
      type: SponsorType.Gold,
      url: 'https://kiandra.com.au/',
    },
    {
      id: 'nintex',
      imageUrl: '/static/images/sponsors/2019/nintex.png',
      name: 'Nintex',
      type: SponsorType.Gold,
      url: 'https://www.nintex.com/',
    },
    // Silver
    {
      id: 'ndcsydney',
      imageUrl: '/static/images/sponsors/2019/ndc-sydney.png',
      name: 'NDC Sydney',
      type: SponsorType.Silver,
      url: 'https://ndcsydney.com/',
    },
    {
      id: 'mongodb',
      imageUrl: '/static/images/sponsors/2019/mongodb.jpg',
      name: 'MongoDB',
      type: SponsorType.Silver,
      url: 'https://www.mongodb.com',
    },
    // Community
    {
      id: 'juniordev',
      imageUrl: '/static/images/sponsors/2019/juniordev.png',
      name: 'JuniorDev',
      type: SponsorType.Community,
      url: 'https://juniordev.io/',
    },
    {
      id: 'wwcm',
      imageUrl: '/static/images/sponsors/2019/womenwhocode.png',
      name: 'Women Who Code Melbourne',
      type: SponsorType.Community,
      url: 'https://www.womenwhocode.com/melbourne',
    },
    {
      id: 'back2bikes',
      imageUrl: '/static/images/sponsors/2019/back2bikes.png',
      name: 'Back2Bikes',
      type: SponsorType.Community,
      url: 'http://back2bikes.com.au/',
    },
    {
      id: 'yow',
      imageUrl: '/static/images/sponsors/2019/yow.png',
      name: 'YOW',
      type: SponsorType.Community,
      url: 'https://www.yowconference.com',
    },
    // Services
    {
      id: 'elastic',
      imageUrl: '/static/images/sponsors/2019/elastic-logo.png',
      name: 'Elastic',
      serviceProvided: 'Coffee Cart',
      type: SponsorType.Service,
      url: 'https://www.elastic.co/',
    },
    {
      id: 'luminiary',
      imageUrl: '/static/images/sponsors/2019/luminary-logo.png',
      name: 'Luminary',
      serviceProvided: 'WiFi',
      type: SponsorType.Service,
      url: 'https://www.luminary.com/',
    },
    {
      id: 'livehire',
      imageUrl: '/static/images/sponsors/2019/livehire.png',
      name: 'LiveHire',
      serviceProvided: 'Childcare',
      type: SponsorType.Service,
      url: 'https://www.livehire.com/',
    },
  ],
}

export default From2019
