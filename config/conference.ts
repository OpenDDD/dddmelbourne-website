import moment from 'moment'
import { orderBy } from '../components/utils/arraySort'
import SponsorData from '../config/sponsors'
import { Conference as IConference, TicketNumberWhileVoting, TicketsProvider } from './types'
import venue from './venue'

const name = 'DDD Melbourne'
const tagLine = `${name} is an inclusive non-profit conference for the software community`

const hideDate = false
const isSoldOut = false
const date = moment.parseZone('2019-08-10T08:00:00+10:00')
const endDate = date.clone().add(12, 'h')
const currentInstance = parseInt(date.format('YYYY'), 10)
const firstInstance = 2010
const wave1RegistrationOpenFrom = moment.parseZone('2019-05-06T12:00:00+10:00')
const wave2RegistrationOpenFrom = moment.parseZone('2019-06-08T15:00:00+10:00')
const registrationOpenUntil = true
  ? null
  : date
      .clone()
      .add(-1, 'd')
      .startOf('day')
      .add(17, 'h')
const presentationSubmissionsOpenFrom = moment.parseZone('2019-04-13T17:00:00+10:00')
const presentationSubmissionsOpenUntil = moment.parseZone('2019-06-15T23:59:59+10:00')
const votingOpenFrom = moment.parseZone('2019-06-16T12:00:00+10:00')
const votingOpenUntil = moment.parseZone('2019-06-22T17:59:59+10:00')
const agendaPublishedFrom = moment.parseZone('2019-07-15T19:00:00+10:00')
const feedbackOpenFrom = date.clone()
const feedbackOpenUntil = endDate
const importantDates = [
  {
    Date: presentationSubmissionsOpenFrom,
    Description: 'Call for presentations open',
    Type: 'content',
  },
  {
    Date: presentationSubmissionsOpenUntil,
    Description: 'Call for presentations close',
    Type: 'content',
  },
  { Description: 'Ticket Release - Wave 1', Date: wave1RegistrationOpenFrom, Type: 'tickets' },
  { Description: 'Ticket Release - Wave 2', Date: wave2RegistrationOpenFrom, Type: 'tickets' },
  { Description: 'Voting open', Date: votingOpenFrom, Type: 'voting' },
  { Description: 'Voting close', Date: votingOpenUntil, Type: 'voting' },
  {
    Date: agendaPublishedFrom,
    Description: 'Agenda published',
    Type: 'agenda',
  },
]

if (registrationOpenUntil !== null && !isSoldOut) {
  importantDates.push({
    Date: registrationOpenUntil,
    Description: 'Ticket sales close',
    Type: 'tickets',
  })
}

if (!hideDate) {
  importantDates.push({
    Date: date,
    Description: 'Conference day',
    Type: 'conference',
  })
}

// tslint:disable:object-literal-sort-keys
const Conference: IConference = {
  Name: name,
  Instance: currentInstance.toString(),
  PreviousInstance: (currentInstance - 1).toString(),
  PreviousInstances: [...Array(currentInstance - firstInstance).keys()].map((_, i) => (firstInstance + i).toString()),
  Organiser: {
    Name: 'Oz Dev Inc.',
    Url: 'https://medium.com/ddd-melbourne/the-ddd-melbourne-crew-5f0dd3da09df',
    ShirtColour: 'blue',
  },
  TagLine: tagLine,
  SiteDescription: `${tagLine}.`,
  Goal:
    'Our goal is to create an approachable event that appeals to the whole community, especially people who usually don’t have the opportunity to attend, or speak at, conferences.',
  GoogleAnalyticsId: 'UA-60040308-1', // TODO
  TicketPrice: '$79',
  TicketsProviderId: TicketsProvider.Tito,
  TicketsProviderAccountId: 'ddd-melbourne',
  TicketsProviderEventId: 'ddd-2019',
  TicketsProviderFinancialAssistanceCode: 'financialassistance', // TODO
  IsSoldOut: isSoldOut,
  HashTag: 'DDDMelbourne',
  SellingPoints: ['One day', 'Fully catered', 'Inclusive atmosphere', 'Interesting presentations', 'Awesome people'],
  Handbook: null,
  SessionizeUrl: 'https://sessionize.com/ddd-melbourne-2019/',
  SessionizeEditUrl: 'https://sessionize.com/app/speaker/',
  PrivateSubmissionUrl: 'https://forms.gle/Hbfn1fiEZqkcwJ8p7',
  PreviouslySubmittedTopics:
    'Agile, building great teams, UI design, software testing, virtual reality, women in tech, web accessibility, open source software, feedback culture, self-employment tips, mentoring, Scrum, pair programming, bots, IoT, machine learning, neural networks, quantum encryption, Assembly language, automated deployments, mobile development, mobile test automation, architecture, microservices, serverless, APIs, GraphQL, actors, JavaScript, authentication, React, UWP,  HTTP protocol, Git, Docker and pointers',

  ContactEmail: 'info@dddmelbourne.com',
  SponsorshipEmail: 'sponsorship@dddmelbourne.com',
  MentoringEmail: 'speakers@dddmelbourne.com',
  EmergencyContactName: 'Tien Phan', // TODO
  EmergencyContactPhoneNumber: 'TBC', // TODO
  MediaOfficerName: 'Yolanie Gamage', // TODO

  AnonymousReportFormUrl: 'https://forms.gle/7GkewmN8BrHQtwWQA',
  AnonymousVoting: true,
  PreferentialVoting: true,
  TicketNumberWhileVoting: TicketNumberWhileVoting.Required,
  MinVotes: 6,
  MaxVotes: 10,

  Date: date,
  EndDate: endDate,
  DoorsOpenTime: '8:00am',
  FinishTime: '6:00pm',
  Wave1RegistrationOpenFrom: wave1RegistrationOpenFrom,
  Wave2RegistrationOpenFrom: wave2RegistrationOpenFrom,
  RegistrationOpenUntil: registrationOpenUntil,
  PresentationSubmissionsOpenFrom: presentationSubmissionsOpenFrom,
  PresentationSubmissionsOpenUntil: presentationSubmissionsOpenUntil,
  VotingOpenFrom: votingOpenFrom,
  VotingOpenUntil: votingOpenUntil,
  AgendaPublishedFrom: agendaPublishedFrom,
  FeedbackOpenFrom: feedbackOpenFrom,
  FeedbackOpenUntil: feedbackOpenUntil,

  ConferenceFeedbackLink: null,
  SessionFeedbackLink: null,

  HideDate: hideDate,
  HideSponsors: false,
  HideSponsorshipUpsell: false,
  HideVenue: venue === null,
  HideAfterpartyVenue: venue === null || venue.Afterparty === null,

  Venue: venue,

  Socials: {
    Twitter: {
      Id: '971044039',
      Name: 'DDDMelbourne',
    },
    Instagram: 'dddmelb',
    Flickr: 'https://www.flickr.com/photos/135717775@N07/albums',
    Youtube: 'https://www.youtube.com/channel/UCj4UnNYakbLAh2xTWTjeoAQ',
    Blog: 'https://medium.com/ddd-melbourne',
    Email: 'dddmelbourne@gmail.com',
    GitHub: 'OpenDDD',
  },

  ImageStrip: [
    { Url: '/static/images/strip/1.jpg', Alternate: 'Ladies networking breakfast 2018' },
    { Url: '/static/images/strip/2.jpg', Alternate: 'Our 2018 speakers' },
    { Url: '/static/images/strip/3.jpg', Alternate: 'DDD 2018 Organisers & Volunteers' },
    { Url: '/static/images/strip/4.jpg', Alternate: 'Socialising with the Liberty Robot' },
    { Url: '/static/images/strip/5.jpg', Alternate: 'Crowd of attendees in 2018' },
  ],

  ImportantContacts: {
    Police: {
      Details: 'Melbourne West Police Station, 313 Spencer St, Docklands VIC 3008',
      MapUrl:
        'https://www.google.com/maps/place/Melbourne+West+Police+Station/@-37.813749,144.9488465,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad65d4f44719edf:0xc5a10f192bea4367!8m2!3d-37.8137533!4d144.9510352',
    },
    CentreAgainstSexualAssault: {
      Details: '1800 806 292',
    },
    EmergencyMedical: {
      Details: 'Royal Melbourne Hospital, 300 Grattan St, Melbourne VIC 3000',
      MapUrl:
        'https://www.google.com/maps/place/The+Royal+Melbourne+Hospital/@-37.7990618,144.9538002,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad65d2e7f540971:0x9d8b2b9975e322e7!8m2!3d-37.7990618!4d144.9559889',
    },
    NonEmergencyMedical: {
      Details: 'Swanston Street Medical Centre, Level 3, 255 Bourke St, Melbourne VIC 3000',
      MapUrl:
        'https://www.google.com/maps/place/Swanston+Street+Medical+Centre/@-37.8135749,144.9639683,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad642cb0cd76b79:0xd7d3d0b9719c23c0!8m2!3d-37.8135749!4d144.966157',
    },
  },

  ImportantDates: orderBy(importantDates, i => i.Date),

  Sponsors: SponsorData,

  Keynotes: [],
}

export default Conference
