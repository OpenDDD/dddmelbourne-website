import moment from 'moment'
import { orderBy } from '../components/utils/arraySort'
import SponsorData from '../config/sponsors'
import { Conference as IConference } from './types'
import venue from './venue'

const name = 'DDD Melbourne'
const tagLine = `${name} is an inclusive non-profit conference for the software community`

const hideDate = false
const isSoldOut = false
const date = moment.parseZone('2019-08-10T08:00+10:00')
const endDate = date.clone().add(12, 'h')
const currentInstance = parseInt(date.format('YYYY'), 10)
const firstInstance = 2015
const registrationOpenFrom = moment.parseZone('2019-04-30T17:00:00+10:00')
const wave1RegistrationOpenFrom = moment.parseZone('2019-05-06T12:00:00+10:00')
const wave2RegistrationOpenFrom = moment.parseZone('2019-06-01T15:00:00+10:00')
const registrationOpenUntil = true
  ? null
  : date
    .clone()
    .add(-1, 'd')
    .startOf('day')
    .add(17, 'h')
const presentationSubmissionsOpenFrom = moment.parseZone('2019-04-30T17:00:00+10:00')
const presentationSubmissionsOpenUntil = moment.parseZone('2019-06-02T23:59:59+10:00')
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
  { Description: 'Wave 1', Date: wave1RegistrationOpenFrom, Type: 'tickets' },
  { Description: 'Wave 2', Date: wave2RegistrationOpenFrom, Type: 'tickets' },
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
  GoogleAnalyticsId: 'UA-60040308-1', //TODO
  TicketPrice: '$79',
  EventbriteId: null, //TODO
  FinancialAssistanceEventbriteCode: 'financialassistance', //TODO
  IsSoldOut: isSoldOut,
  HashTag: 'dddmelbourne',
  SellingPoints: ['One day', 'Fully catered', 'Inclusive atmosphere', 'Interesting presentations', 'Awesome people'],
  Handbook: null,
  SessionizeUrl: null,
  SessionizeEditUrl: 'https://sessionize.com/app/speaker/',
  PreviouslySubmittedTopics:
    'Agile, building great teams, UI design, software testing, virtual reality, women in tech, web accessibility, open source software, feedback culture, self-employment tips, mentoring, Scrum, pair programming, bots, IoT, machine learning, neural networks, quantum encryption, Assembly language, automated deployments, mobile development, mobile test automation, architecture, microservices, serverless, APIs, GraphQL, actors, JavaScript, authentication, React, UWP,  HTTP protocol, Git, Docker and pointers',

  ContactEmail: 'info@dddmelbourne.com',
  SponsorshipEmail: 'sponsorship@dddmelbourne.com',
  MentoringEmail: 'speakers@dddmelbourne.com',
  EmergencyContactName: 'Tien Phan', //TODO
  EmergencyContactPhoneNumber: 'TBC', //TODO
  MediaOfficerName: 'Yolanie Gamage', //TODO

  AnonymousReportFormUrl:
    'https://forms.office.com/Pages/ResponsePage.aspx?id=8IU585acE0S9pvuDhIEiS26sQVnJFzFLm-6XlxI4bCFURDVGTks2N1VOQVBWWUU1VFJESDZMNlkxNS4u', //TODO

  AnonymousVoting: true,
  MinVotes: 8,
  MaxVotes: 12,

  Date: date,
  EndDate: endDate,
  DoorsOpenTime: '8:10am',
  FinishTime: '5:10pm',
  RegistrationOpenFrom: registrationOpenFrom,
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
  HideSponsors: true,
  HideSponsorshipUpsell: false,
  HideVenue: venue === null,
  HideAfterpartyVenue: venue === null || venue.Afterparty === null,

  Venue: venue,

  Socials: {
    Twitter: {
      Id: '971044039',
      Name: 'DDDMelbourne',
    },
    Facebook: 'DDDMelbourne', //TODO
    Flickr: 'https://www.flickr.com/photos/135003652@N08/albums', //TODO
    Youtube: 'https://www.youtube.com/channel/UCq4oEsAIrAg-AdpuSLtfxbw',
    Blog: 'https://blog.dddmelbourne.com/',
    Email: 'info@dddmelbourne.com',
    MailingList: 'http://eepurl.com/cRvaSf', //TODO
    GitHub: 'OpenDDD',
  },

  ImageStrip: [
    { Url: '/static/images/strip/1.jpg', Alternate: 'Kris Howard delivering her 2017 locknote' },
    { Url: '/static/images/strip/2.jpg', Alternate: 'Our 2017 speakers' },
    { Url: '/static/images/strip/3.jpg', Alternate: 'Visting the readify booth' },
    { Url: '/static/images/strip/4.jpg', Alternate: 'Early morning registration' },
    { Url: '/static/images/strip/5.jpg', Alternate: 'Donna Edwards speaking at DDD 2017' },
  ],

  ImportantContacts: {
    Police: {
      Details: '2 Fitzgerald St, Northbridge WA 6003 ph: (08) 9422 7111',
      MapUrl:
        'https://www.google.com.au/maps/place/WA+Police/@-31.9539457,115.8571227,15z/data=!4m8!1m2!2m1!1swa+police!3m4!1s0x2a32bad2aad309a9:0x132b875b4c12ce8a!8m2!3d-31.9465398!4d115.852523',
    },
    CentreAgainstSexualAssault: {
      Details: '1800 806 292',
    },
    EmergencyMedical: {
      Details: 'Royal Melbourne Hospital, 300 Grattan Street, Melbourne VIC 3000',
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
