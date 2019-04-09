import { Sponsor, SponsorType } from './types'

const Sponsors: Sponsor[] = [
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
  // Silver
  {
    imageUrl: '/static/images/sponsors/2019/ndc-sydney.png',
    name: 'NDC Sydney',
    type: SponsorType.Silver,
    url: 'http://ndcsydney.com/',
  },
  // Community
  {
    imageUrl: '/static/images/sponsors/2019/GGDMelb.png',
    name: 'Girl Geek Dinners Melbourne',
    type: SponsorType.Community,
    url: 'https://www.meetup.com/en-AU/Girl-Geek-Dinners-Melbourne/',
  },
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
  // Services
  // Standard
]

export default Sponsors
