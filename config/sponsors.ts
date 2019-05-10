import { Sponsor, SponsorType } from './types'

const Sponsors: Sponsor[] = [
  // Diamon
  {
    imageUrl: '/static/images/sponsors/2019/microsoft.png',
    name: 'Microsoft',
    type: SponsorType.Diamond,
    url: 'https://azure.microsoft.com/en-au/',
  },
  // Platinum
  {
    imageUrl: '/static/images/sponsors/2019/liberty.png',
    name: 'Liberty',
    type: SponsorType.Platinum,
    url: 'https://www.liberty.com.au/',
  },
  {
    imageUrl: '/static/images/sponsors/2019/webjet.png',
    name: 'WebJet',
    type: SponsorType.Platinum,
    url: 'https://www.webjet.com.au/',
  },
  // Gold
  {
    imageUrl: '/static/images/sponsors/2019/Compass-Logo.png',
    name: 'Compass',
    type: SponsorType.Gold,
    url: 'https://www.compass.education/',
  },
  // Silver
  {
    imageUrl: '/static/images/sponsors/2019/ndc-sydney.png',
    name: 'NDC Sydney',
    type: SponsorType.Silver,
    url: 'http://ndcsydney.com/',
  },
  // Community
  {
    imageUrl: '/static/images/sponsors/2019/juniordev.png',
    name: 'JuniorDev',
    type: SponsorType.Community,
    url: 'http://juniordev.io/',
  },
  {
    imageUrl: '/static/images/sponsors/2019/womenwhocode.png',
    name: 'Women Who Code Melbourne',
    type: SponsorType.Community,
    url: 'https://www.womenwhocode.com/melbourne',
  },
  {
    imageUrl: '/static/images/sponsors/2019/back2bikes.png',
    name: 'Back2Bikes',
    type: SponsorType.Community,
    url: 'http://back2bikes.com.au/',
  },
  // Services
  {
    imageUrl: '/static/images/sponsors/2019/elastic-logo.png',
    name: 'Elastic',
    serviceProvided: 'Coffee Cart',
    type: SponsorType.Service,
    url: 'https://www.elastic.co/',
  },
  {
    imageUrl: '/static/images/sponsors/2019/luminary-logo.png',
    name: 'Luminary',
    serviceProvided: 'WiFi',
    type: SponsorType.Service,
    url: 'https://www.luminary.com/',
  },
  {
    imageUrl: '/static/images/sponsors/2019/livehire.png',
    name: 'LiveHire',
    serviceProvided: 'Childcare',
    type: SponsorType.Service,
    url: 'https://www.livehire.com/',
  },
  // Standard
]

export default Sponsors
